---
title: "Has anyone here ever built their own Linux distribution?"
date: "2026-03-20"
author: "Eddie Barlow"
category: "Operating Systems"
excerpt: "Why I built CARINA OS, a mission-ready Linux distro for STEM, robotics, AI, and cybersecurity—and how it powers StarKid Command."
readTime: "9 min read"
slug: "carina-os-mission-ready-linux"
---

# Has anyone here ever built their own Linux distribution?

Not just a rebranded theme or a customized desktop—but an operating system designed around a specific mission.

Over the past few months I’ve been working on something called **CARINA OS** — a purpose-built Linux distribution designed for engineers, builders, and students working in STEM, space systems, robotics, AI, and cybersecurity.

At first glance it might look like another Linux distro with a cool space theme. But the goal was never to create “space wallpaper Linux.”

The goal was to build a mission-ready development environment that solves real problems engineers and students face when experimenting with hardware, software, and automation.

## Why CARINA OS exists

Most Linux systems are extremely powerful, but they often assume users will:

- run experimental code directly on the host system
- manually configure hardware permissions
- copy/paste installs from random tutorials
- debug broken environments after experiments go wrong

For engineers and STEM labs, that’s not ideal.

CARINA OS approaches the system differently. Instead of being a blank canvas, it behaves more like mission infrastructure.

The system is structured around three key ideas:

### 1) Isolation by default

CARINA includes a built-in sandbox execution system that allows developers and students to spin up disposable environments to test scripts, tools, or automation safely.

Experiments run inside controlled containers with automatic cleanup timers. If something breaks, the sandbox disappears — the system stays clean.

### 2) Engineering tooling as a managed capability

Instead of bloating the OS with dozens of packages, CARINA includes a framework called **MissionLab**.

MissionLab allows users to install engineering toolchains on demand, such as:

- Arduino CLI
- PlatformIO
- robotics tooling
- embedded development frameworks

Each install is logged, versioned, and traceable so environments stay reproducible.

### 3) AI as an operating system copilot

One of the most interesting parts of CARINA is **CARINA Control**, an embedded LLM-driven advisory system.

But unlike most AI integrations, it does not act autonomously. Instead, it behaves more like an engineering copilot.

The AI can:

- observe system health
- analyze logs
- recommend actions
- propose tests inside safe environments

But every action must be approved by the user before execution.

Think of it as the agent-based system Microsoft should have built when they introduced Cortana years ago — not a voice assistant, but a system-aware engineering advisor.

The AI proposes. The human decides. And any execution runs inside a controlled sandbox.

## CARINA OS powers StarKid Command

But CARINA OS wasn’t built just for fun. It was created to power a much bigger project I’ve been developing called **StarKid Command**.

StarKid Command is a STEM platform designed to create dynamic labs based on real-world space telemetry and events.

The idea is simple: instead of static labs that every student does the same way, every lab evolves based on real-world space missions. No two STEM experiences are identical.

### Example: Artemis II Mission Lab

When discussing the upcoming Artemis II mission, we created a math and engineering lab where students calculate the fuel mixture ratio required for a mission of a specific payload mass.

Students are given:

- spacecraft weight
- propellant density
- thrust requirements
- engine efficiency assumptions

Their task is to determine the proper oxidizer-to-fuel ratio needed to support the projected payload and trajectory.

It turns a real mission into a hands-on engineering challenge.

### Example: Cybersecurity Mission Scenario

In another lab, we simulate a cybersecurity incident.

The Artemis launch gets scrubbed due to a suspected intrusion into the mission control telemetry system.

Students are given access to:

- system logs
- network events
- firewall rules

After investigation they discover the root cause: an open administrative port left exposed during testing allowed an unauthorized connection to inject commands into the telemetry monitoring service.

Students must:

- analyze the logs
- identify the breach point
- close the port
- patch the service configuration

This turns a real-world cyber scenario into a practical investigation exercise.

## Why this led to building my own Linux OS

Once these labs started becoming dynamic and event-driven, we ran into a problem.

We needed an environment where instructors, engineers, and automation systems could:

- run controlled experiments
- spin up safe sandboxes
- monitor system behavior
- integrate AI-driven analysis
- manage toolchains for robotics and embedded hardware

Existing operating systems weren’t designed for that kind of workflow. So we built one.

That platform became **CARINA OS**.

It’s the operating backbone that allows the StarKid platform to blur the line between education, simulation, and real-world engineering challenges.

What started as a small internal tool is quickly becoming something much bigger.

A space-focused development environment. An AI-assisted engineering platform. And the operating system behind a dynamic STEM ecosystem.

And honestly… this is just the beginning.
