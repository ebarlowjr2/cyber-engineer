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

Useful, right? But Bash can do more than basic `*` and `?` matching.

With **extended globbing**, your shell gets a little pattern-matching upgrade. Think of it like giving wildcards a utility belt.

## Turn It On

In Bash, enable extended globbing with:

```bash
shopt -s extglob
```

Now you can use patterns like:

```bash
?(pattern)   # zero or one match
*(pattern)   # zero or more matches
+(pattern)   # one or more matches
@(pattern)   # exactly one match
!(pattern)   # anything except this pattern
```

## Quick Examples

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

## Why It Is Useful

Extended globbing is great when you need to quickly filter files without reaching for heavier tools like `find`, `awk`, or a custom script.

It can help with:

- cleaning up directories
- filtering logs
- organizing file types
- safer command previews before deletes
- writing sharper shell scripts

## Small Safety Tip

Before using extended globbing with destructive commands like `rm`, preview first:

```bash
printf '%s\n' !(*.md)
```

If the output looks right, then run the real command.

Tiny feature. Big shell energy.
