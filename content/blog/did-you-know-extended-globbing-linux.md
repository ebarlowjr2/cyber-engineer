---
title: "Did You Know? Extended Globbing Makes Linux Wildcards Way Smarter"
date: "2026-08-03"
author: "Eddie Barlow"
category: "Linux"
excerpt: "Extended globbing turns everyday Linux wildcards into a tiny pattern-matching superpower for faster cleanup, filtering, and shell work."
readTime: "3 min read"
slug: "did-you-know-extended-globbing-linux"
---

# Did You Know? Extended Globbing Makes Linux Wildcards Way Smarter

Most Linux users know the classics:

```bash
ls *.log
rm *.tmp
```

Useful? Absolutely. But Bash can do more than basic `*` and `?` matching. With **extended globbing**, your shell gets a little pattern-matching upgrade — like giving wildcards a tactical utility belt.

> Quick takeaway: extended globbing helps you match groups of files, optional patterns, repeated patterns, and even “everything except this” without jumping straight to `find`, `awk`, or a custom script.

## Turn It On

In Bash, enable extended globbing with:

```bash
shopt -s extglob
```

Now your shell understands these extra pattern operators:

```bash
?(pattern)   # zero or one match
*(pattern)   # zero or more matches
+(pattern)   # one or more matches
@(pattern)   # exactly one match
!(pattern)   # anything except this pattern
```

## Try This

Want to list only `.log` or `.txt` files?

```bash
ls *.@(log|txt)
```

Want to remove everything except markdown files?

```bash
rm !(*.md)
```

Want to match backup files like `backup.tar`, `backup.tar.gz`, or `backup.tar.bz2`?

```bash
ls backup.tar?(.gz|.bz2)
```

## Why It Helps

Extended globbing is great when you need fast filtering right in the shell. It can help with:

- cleaning up messy directories
- filtering logs during troubleshooting
- organizing file types before archiving
- previewing what a destructive command would touch
- writing sharper shell scripts with less glue code

## Safety Check

Before using extended globbing with destructive commands like `rm`, preview first:

```bash
printf '%s\n' !(*.md)
```

If the output looks right, then run the real command.

## Field Note

The fun part is how small this feature is. One shell option unlocks cleaner commands, faster file triage, and fewer one-off scripts.

Tiny feature. Big shell energy.
