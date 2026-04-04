---
title: "Ally — Envision Technologies"
tagline: "AI-powered accessibility platform for blind and low vision users"
status: "live"
featured: true
order: 2
image: "/images/ally/main.png"
imageAlt: "Ally accessibility platform interface deployed at a museum, showing audio description system"
tags: ["Accessibility", "Conversational AI", "Web", "Voice Interface", "React"]
metrics:
  - { label: "Users Globally", value: "100,000+" }
  - { label: "User Satisfaction", value: "100%" }
  - { label: "Deployment", value: "Museums (SF)" }
  - { label: "Interaction Mode", value: "Voice + Keyboard" }
links:
  live: "https://www.ally.me/museums"
recognition:
  - "Deployed in San Francisco museum pilots"
  - "100% of pilot participants reported improved experience"
  - "Reduced dependency on human assistance"
year: "2024"
paper:
  abstract: "Ally is an AI-powered accessibility platform deployed by Envision Technologies, enabling blind and low vision users to navigate cultural and digital environments through conversational voice and keyboard interfaces."
  problem: "Cultural institutions lack scalable accessible interfaces. Blind and low vision visitors depend on human guides or miss content entirely — no AI-powered solution existed at deployment scale for museum accessibility."
  method: "Conversational AI layer with voice interface and keyboard navigation, integrated with museum content management systems. React-based accessible web platform deployed across San Francisco's museum network."
  results: "Serving 100,000+ users globally. 100% of San Francisco museum pilot participants reported improved experience. Measurably reduced dependency on human assistance during visits."
  limitations: "Effectiveness depends on quality of museum content metadata. Voice recognition degrades in noisy environments. Initial deployment required significant content onboarding from institutional partners."
---

## Overview

Ally is an AI-powered accessibility platform built by Envision Technologies for blind and low vision users. The platform enables natural, conversational interaction with digital environments — removing barriers that traditional interfaces were never designed to address.

At Envision, I worked as a Software Engineer on the Ally platform, contributing to systems that now serve over 100,000 users worldwide.

## What I Built

My work at Envision focused on two primary areas:

**Accessible Conversational AI Systems**

Built the infrastructure for voice-driven, conversational interaction with Ally's AI layer. This involved designing interaction flows that work without visual feedback — relying entirely on audio output, spatial cues, and keyboard navigation. Every decision had to account for users who can't see the interface at all.

**Web Platform Development**

Developed the web-based version of Ally, supporting both voice and keyboard-first interaction. The implementation had to meet WCAG standards rigorously — not as a checklist, but as a product requirement. Screen reader compatibility, focus management, and semantic HTML were foundational, not afterthoughts.

## Museum Deployments

Ally was piloted in San Francisco museums as an accessibility layer for exhibits and wayfinding. The system allowed blind and low vision visitors to engage with exhibit content through conversational AI — asking questions, receiving descriptions, and navigating independently.

Key outcomes from the pilot:
- 100% of participants reported an improved museum experience
- Significant reduction in reliance on human docent assistance
- Validated real-world usability of AI-driven audio description at scale

## Scale and Impact

The platform serves over 100,000 users globally across Envision's product ecosystem. Working at this scale meant that accessibility was not an optional feature — it was the product. Every decision, from API response time to audio clarity, directly affected users who had no fallback to a visual interface.

## What This Work Taught Me

Building Ally reinforced a core belief: accessibility infrastructure must be treated with the same engineering rigor as any performance-critical system. Latency matters. Reliability matters. Ambiguity in an audio prompt causes real confusion for real users.

This experience also sharpened my thinking on designing AI systems for users whose needs are specific and non-negotiable — a mindset I carry directly into Safe Step and future assistive projects.
