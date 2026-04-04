---
title: "EyeDxAI"
tagline: "AI-powered eye diagnosis assistant using Gemini for ocular analysis"
status: "live"
featured: true
order: 3
image: "/images/eyedxai/main.png"
imageAlt: "EyeDxAI — AI-powered eye diagnosis assistant"
tags: ["Flutter", "Gemini API", "Google AI", "Healthcare AI", "Mobile", "Dart"]
metrics:
  - { label: "Competition", value: "Google Gemini 2024" }
  - { label: "Result", value: "Shortlisted" }
  - { label: "Platform", value: "Flutter (iOS + Android)" }
  - { label: "Modality", value: "Image + Text Analysis" }
links:
  demo: "https://ai.google.dev/competition/projects/eyedxai-eye-diagnosis-with-ai"
  live: "https://youtu.be/TRyZxk5Bp28"
recognition:
  - "Shortlisted — Google Gemini Developer Competition 2024"
  - "Presented at Google AI & Health Workshop, Accra"
  - "Featured at Google DevFest keynote"
year: "2024"
---

## Overview

EyeDxAI is an AI-powered eye diagnosis assistant that uses Google's Gemini model to analyze ocular symptoms, suggest differential diagnoses, and recommend appropriate clinical tests. It is built as an open-source Flutter application — usable across iOS and Android without additional setup.

The project sits at the intersection of my clinical training as an optometrist and my work in AI systems. It represents an attempt to make the diagnostic reasoning of a trained eye care professional accessible as a tool — not a replacement for the clinician, but a structured first pass that increases diagnostic efficiency.

## The Clinical Problem

In Ghana, and across much of West Africa, eye care access is limited by the number of practicing optometrists relative to the population. Patients often travel significant distances to see a clinician, and when they arrive, appointment time is constrained. Early triage — understanding which symptoms warrant urgent attention versus routine review — is difficult without trained eyes.

EyeDxAI addresses this gap by enabling a structured intake and preliminary analysis of ocular complaints before a clinician is involved.

## How It Works

The application allows users or health workers to:

1. **Describe symptoms** — the patient's chief complaint, duration, and associated factors (pain, vision change, discharge, redness)
2. **Submit an image** — a smartphone photograph of the eye, if available
3. **Receive an analysis** — Gemini returns a structured differential diagnosis with probability weighting, recommended clinical tests, and urgency classification

The Gemini model is prompted with clinical context — standard optometric diagnostic frameworks — so the outputs align with how a clinician would reason through the same presentation.

## Recognition

EyeDxAI was shortlisted for the Google Gemini Developer Competition in 2024, which evaluated AI applications built on Gemini across global submissions. The project was subsequently presented at the Google AI & Health Workshop in Accra and featured at a Google DevFest keynote.

These recognitions validated both the technical approach and the real-world relevance of the problem being addressed.

## Open Source

The application is open source. The goal is to make the tool extensible — clinicians and developers in the eye care space can adapt it for their specific context, add support for additional diagnostic categories, or integrate it with existing health record systems.
