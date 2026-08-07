---
title: "Hands-On Securing RHEL 10: A STIG Engineer's Field Notes"
date: "2026-08-07"
author: "Eddie Barlow"
category: "Linux"
excerpt: "RHEL 10 brings image mode, post-quantum package verification, updated security tooling, and a new DISA STIG baseline. Here is what I would check first when hardening it hands-on."
readTime: "8 min read"
slug: "hands-on-securing-rhel-10"
---

# Hands-On Securing RHEL 10: A STIG Engineer's Field Notes

RHEL 10 is not just another Enterprise Linux refresh. From a security engineer's seat, it feels like Red Hat is pushing the operating system toward a more repeatable, image-driven, cryptographically modern future.

That matters because hardening a system is rarely about changing one setting. The harder problem is keeping that setting consistent across real environments, real administrators, real applications, and real mission pressure.

I have spent years implementing DISA STIGs across Linux environments, and my first questions with a new release are always practical:

- What reduces attack surface?
- What breaks existing automation?
- What changes how evidence should be collected?
- What will an assessor actually expect to see?
- What helps us prevent configuration drift six months from now?

RHEL 10 gives us better tools, but it also gives security teams new details to pay attention to.

> Field note: RHEL 10 is familiar enough that mature RHEL 9 teams are not starting over, but different enough that copied remediation scripts should not be trusted without review.

## Start With The Platform Baseline

RHEL 10 launched with a more modern software foundation: Linux kernel 6.12, OpenSSH 9.9, SELinux userspace 3.8, GCC 14, Python 3.12, Node.js 22, PostgreSQL 16, and other updated components.

On x86 systems, RHEL 10 also moves the minimum CPU baseline from `x86-64-v2` to `x86-64-v3`.

That is good for performance and platform modernization, but it comes with an operational warning: older physical servers and older virtual CPU profiles may not boot RHEL 10. Before treating hardening as a checklist exercise, validate the hardware and hypervisor baseline.

A secure build that cannot run on the target infrastructure is not a secure build. It is a meeting agenda.

## Use Image Mode To Fight Configuration Drift

My favorite RHEL 10 capability is image mode.

With image mode and `bootc`, the operating system can be built, tested, versioned, signed, and deployed using container-style workflows. Instead of treating every server as a unique snowflake that gets patched and remediated in place, teams can define the OS image, validate it, and promote the same known build across environments.

That is a big deal for STIG work.

Traditional server hardening often looks like this:

```bash
install system
apply packages
run remediation
fix what broke
collect evidence
hope it does not drift
```

Image-based hardening moves more of that work into an engineered pipeline:

```bash
build image
scan image
test mission workload
sign image
promote image
redeploy consistently
```

It does not eliminate continuous compliance. Runtime settings, mounted storage, secrets, identity configuration, and application behavior can still drift. But it changes the conversation from "repair every server forever" to "fix the approved build and redeploy."

That is a serious operational improvement.

## Pay Attention To Post-Quantum Package Verification

RHEL 10 includes early support for post-quantum cryptographic algorithms, and that direction shows up in the STIG package verification process.

In the current RHEL 10 STIG, vendor package verification checks Red Hat's newer release key 4 using `sq inspect`. That key uses a hybrid ML-DSA-87+Ed448 signature approach.

For hands-on implementation, that means package verification automation should not blindly assume the old RHEL 9 GPG-only flow is enough.

The practical concern is not that a quantum computer is attacking your server tomorrow. The concern is transition readiness. Security teams need time to test cryptographic changes before they become urgent compliance requirements.

## Update Smart Card And PKCS 11 Assumptions

RHEL 10 changes some package expectations around smart cards, tokens, CAC workflows, and hardware-backed cryptography.

One important example is the move from `openssl-pkcs11` toward the newer `pkcs11-provider` model. The RHEL 10 STIG also explicitly checks for `pcsc-lite-ccid`, making the smart-card reader driver dependency its own assessed item.

That matters if your organization uses:

- CAC authentication
- smart-card login
- hardware tokens
- HSM-backed workflows
- automated STIG remediation for PKCS 11 packages

If your scripts install old package names or only check broad dependencies, they may pass your internal logic while failing the newer benchmark.

## Reduce The Legacy Surface

RHEL 10 removes the X.Org server and standardizes the desktop on Wayland while still supporting X11 applications through Xwayland. It also removes or replaces a long list of older packages and technologies.

From a security perspective, that is healthy. Less legacy surface area means fewer old assumptions and fewer components hanging around because "we have always had them."

But from an operations perspective, it also means migration testing matters.

If a graphical workflow is required, document it. If it is not required, avoid installing it. The RHEL 10 STIG adds more explicit package-removal expectations, including checks around packages such as `gdm`, `unbound`, and `tftp` depending on mission need and documentation.

Minimal installs are not just cleaner. They are easier to defend.

## Revisit Audit Rules Instead Of Copying RHEL 9 Files

Audit rules are one of those areas where copying an old baseline can create quiet gaps.

RHEL 10 expands syscall auditing in several places. For example, permission-change auditing adds `fchmodat2`, and deletion or rename auditing adds `renameat2`.

If you bring forward RHEL 9 audit rule files without reviewing the new benchmark, you may miss required coverage.

A practical check is simple: compare your generated audit rules against the RHEL 10 XCCDF content instead of assuming previous files are complete.

```bash
augenrules --check
auditctl -l
```

Then compare the live rule set, the files under `/etc/audit/rules.d/`, and the actual STIG requirement text. In hardened environments, evidence should show both configuration intent and running state.

## Watch File Permissions And Systemd-Tmpfiles

RHEL 10 introduces some requirements that are less about a file's current permissions and more about how files are created or restored.

One example is root initialization files managed through `systemd-tmpfiles`. The RHEL 10 STIG expects root initialization files copied from `/usr/share/rootfiles/` to be overridden under `/etc/tmpfiles.d/` with mode `0600`.

That is an important mindset shift.

Do not only ask:

```bash
ls -la /root
```

Also ask how those files got there, what will recreate them, and whether the secure state survives rebuilds or package-driven restoration.

RHEL 10 also explicitly prohibits local initialization files from executing world-writable programs. A `.bashrc` file can have tight permissions and still become dangerous if it launches something an unprivileged user can modify.

## Treat NFS More Seriously

If NFS mounts exist, the RHEL 10 STIG requires stronger security options. The mount must use the `sec` option, and traditional `sec=sys` is not acceptable. Kerberos-backed options such as `krb5`, `krb5i`, or `krb5p` are expected depending on the requirement and environment.

That matters because NFS has historically depended too heavily on UID/GID trust.

For hands-on hardening, review `/etc/fstab`, active mounts, and any automount configuration:

```bash
findmnt -t nfs,nfs4
mount | grep nfs
```

If NFS is required, document it and secure it properly. If it is not required, remove the dependency.

## Do Not Ignore Early STIG Inconsistencies

Early STIG releases often contain small inconsistencies. RHEL 10 is no exception.

One example from the current benchmark is the interactive shell timeout requirement. The rule title references 15 minutes, while the check and fix text still enforce `TMOUT=600`, or 10 minutes.

In situations like this, I prefer to enforce the measurable check value, document the discrepancy, and watch for the next DISA update.

The same engineering judgment applies when package names, rule titles, check text, and fix text do not perfectly align. Do not blindly run remediation against production and call the system secure.

Read the full control. Test the change. Capture evidence. Document conflicts.

## My Practical RHEL 10 Hardening Checklist

If I were beginning a hands-on RHEL 10 security effort, I would start here:

- Confirm hardware and virtual CPU compatibility with the new baseline.
- Decide whether the system should be image-managed, traditionally managed, or part of a phased transition.
- Build from a minimal install and justify anything extra.
- Validate FIPS, SELinux, auditd, AIDE, SSH, firewall, account lockout, and password policy controls.
- Update package checks for RHEL 10-specific names like `pkcs11-provider` and `pcsc-lite-ccid`.
- Review audit rules for new syscalls instead of reusing RHEL 9 files unchanged.
- Validate root initialization files and `systemd-tmpfiles` behavior.
- Review NFS mounts for RPCSEC_GSS requirements.
- Capture evidence from both configuration files and live system state.
- Track early STIG inconsistencies in engineering notes or POA&M artifacts.

## Final Thought

RHEL 10 is a solid step forward for secure Linux engineering. The biggest win is not one individual setting. It is the move toward making secure builds more repeatable, testable, and resistant to drift.

The STIG is mostly evolutionary, but the implementation details matter. Teams with mature RHEL 9 automation have a strong starting point, but they should still update package names, audit rules, permissions, severity mappings, and RHEL 10-specific controls.

Passing a checklist once is not the goal.

Building a secure operating model that stays secure is the goal.

## References

- [Red Hat announces RHEL 10, May 20, 2025](https://www.redhat.com/en/about/press-releases/red-hat-introduces-rhel-10)
- [RHEL 10.0 release notes](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/10.0_release_notes/index)
- [Key differences between RHEL 9 and RHEL 10](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html-single/considerations_in_adopting_rhel_10/index)
- [Image mode for RHEL](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/using_image_mode_for_rhel_to_build_deploy_and_manage_operating_systems/index)
- [RHEL Lightspeed command-line assistant](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/interacting_with_the_command-line_assistant/index)
- [Red Hat product signing keys](https://access.redhat.com/security/team/key)
- [NIST National Checklist Program: RHEL 10 STIG V1R2](https://ncp.nist.gov/checklist/1328)
- [NIST National Checklist Program: RHEL 9 STIG V2R9](https://ncp.nist.gov/checklist/1072)
