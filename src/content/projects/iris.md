---
title: "IRIS"
tagline: "EdTech platform for optometry students — flashcards, notes, and quizzes"
status: "live"
featured: false
order: 5
image: "/images/iris/main.jpeg"
imageAlt: "IRIS EdTech platform interface showing flashcard and quiz study system"
tags: ["Flutter", "Dart", "Firebase", "EdTech", "Mobile"]
links:
  github: "https://github.com/Strange-Philip/iRis"
year: "2022"
paper:
  abstract: "IRIS is a mobile EdTech platform for optometry students, providing structured flashcard, note-taking, and quiz modules calibrated to the clinical content of optometric training curricula."
  problem: "Optometry students face a high volume of specialized clinical content with no dedicated study tool. General apps (Anki, Quizlet) lack optometry-specific structure and exam alignment."
  method: "Flutter + Firebase for cross-platform mobile delivery. Content organized by optometry curriculum modules. Spaced repetition logic for flashcard scheduling. Offline-first architecture via Firebase local cache."
  results: "Used by optometry students at the University of Cape Coast. Content spans refraction, ocular disease, binocular vision, and clinical procedures."
  limitations: "Content is manually curated — no automated generation from syllabi or textbooks. No clinical case simulation or OSCE-style practice mode. Limited to English-language content."
---

## Overview

IRIS is a mobile learning platform built for optometry students. It provides a structured study environment with flashcards, notes, and quiz modules — designed around the specific content requirements of optometric training.

The project was built during my early academic years at the University of Cape Coast, where I identified a gap between the volume of clinical content students needed to retain and the tools available to support that learning.

## The Problem

Optometry curricula cover a dense range of material — anatomy, physiology, pharmacology, clinical procedures, and diagnostic criteria — with high stakes examinations requiring precise recall. Generic study apps like Anki are powerful but require significant manual setup. IRIS was designed to provide domain-specific study materials out of the box, structured around the optometric curriculum.

## Features

- **Flashcard system** — topic-organized decks covering anatomy, optics, pharmacology, and clinical conditions
- **Notes module** — structured notes aligned to major curriculum areas
- **Quiz mode** — timed and untimed quiz sessions with performance tracking
- **Progress tracking** — session history and retention metrics to guide study focus

## Technical Implementation

Built with Flutter for cross-platform deployment on iOS and Android. Firebase handles authentication and real-time data sync, enabling cloud-based note storage and progress tracking across devices.

The architecture was designed to be extensible — new content categories and question banks can be added without structural changes to the app.
