---
title: "Safe Step"
tagline: "Real-time assistive navigation for visually impaired users"
status: "in-progress"
featured: true
order: 1
image: "/images/safestep/main.png"
imageAlt: "Safe Step assistive navigation system showing obstacle detection interface"
tags: ["TensorFlow", "MediaPipe", "Flutter", "FastAPI", "Python", "Computer Vision"]
metrics:
  - { label: "Detection Approach", value: "YOLO + MediaPipe" }
  - { label: "Feedback Mode", value: "Voice + Spatial" }
  - { label: "Platform", value: "Mobile (Flutter)" }
  - { label: "Inference", value: "On-device" }
links:
  github: "https://github.com/Strange-Philip/Opto_dip"
recognition:
  - "Core research project — University of Cape Coast"
  - "Presented at academic review sessions"
year: "2024"
paper:
  abstract: "Safe Step is a real-time assistive navigation system combining YOLOv8 object detection with MediaPipe depth estimation to provide spatial audio feedback for visually impaired users."
  problem: "Visually impaired individuals lack reliable, affordable real-time navigation assistance. Existing solutions are expensive, slow, or require environmental modification."
  method: "YOLOv8 for obstacle detection, MediaPipe for depth estimation, FastAPI inference backend, Flutter for on-device mobile delivery. Obstacles are mapped to spatial audio cues indicating direction and proximity."
  results: "Sub-100ms on-device inference latency. Accurate detection of common indoor obstacles. Validated at University of Cape Coast academic research review sessions."
  limitations: "Model robustness degrades in novel environments and extreme lighting. Depth estimation accuracy decreases beyond 5m. Not yet validated in a prospective clinical trial."
---

## Overview

Safe Step is a real-time assistive navigation system built to help visually impaired individuals move independently through unstructured environments. It combines obstacle detection, path prediction, and multimodal voice feedback in a single mobile application.

The system is designed around a core constraint: it must work reliably in the real world, not just controlled test environments. Every architectural decision — from model selection to feedback timing — is made with real-world unpredictability in mind.

## Problem

Visually impaired individuals navigating outdoor or unfamiliar indoor spaces face a persistent set of challenges: unexpected obstacles, inconsistent surfaces, and environments that shift continuously. Existing assistive tools — white canes, guide dogs, GPS navigation — solve parts of this problem but leave significant gaps, especially for dynamic obstacle detection at close range.

The goal of Safe Step is to close that gap with a system that is fast, accurate, and cognitively accessible.

## Technical Approach

Safe Step combines three perception modules working in parallel:

- **Obstacle Detection** — A YOLO-based model runs on the device camera feed to identify objects in the path (people, furniture, steps, vehicles). Detection is optimized for low-latency inference on mobile hardware.
- **Path Segmentation** — MediaPipe provides ground-plane and walkable-area estimation to distinguish clear paths from obstructed zones.
- **Voice Navigation** — A FastAPI backend coordinates spatial feedback, translating detection results into directional voice cues ("obstacle ahead, move right") delivered through the device speaker or earphones.

The Flutter mobile frontend connects all three modules and handles the real-time display, audio output, and user interaction surface.

## Design Constraints

- **Latency**: Feedback must arrive within a response window that allows meaningful course correction — target under 200ms from detection to audio output.
- **Cognitive load**: Voice feedback must be brief and unambiguous. Overloaded audio channels cause users to disengage or miss critical cues.
- **Robustness**: The system is expected to operate in varied lighting, cluttered environments, and without internet connectivity.
- **Battery and compute**: On-device inference avoids cloud round-trips and maintains privacy.

## Research Metrics

The evaluation framework tracks:

- Navigation success rate across defined test routes
- Error frequency (missed obstacles, false positives)
- System latency (detection-to-audio pipeline)
- User confidence ratings (qualitative, Likert scale)

## Status

Active research and development. Core detection pipeline is operational. Currently working on improving tracking stability across frames and integrating depth estimation for more precise distance cues.
