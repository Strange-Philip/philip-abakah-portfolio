---
title: "F1 Pit Stop Prediction"
tagline: "Predicting pit stop decisions from noisy race-state signals using ML"
status: "in-progress"
featured: false
order: 8
year: "2026"
image: "/images/f1-pitstop-prediction/competition.png"
imageAlt: "Kaggle Playground Series S6E5 — Predicting F1 Pit Stops competition overview"
tags: ["Python", "Machine Learning", "CatBoost", "scikit-learn", "pandas", "Kaggle", "Feature Engineering", "Playground Series S6E5"]
metrics:
  - { label: "Leaderboard", value: "2,193 / 33,062" }
  - { label: "Validation AUC", value: "0.9434" }
  - { label: "Top Signal", value: "LapTime_Delta" }
  - { label: "Teams", value: "2,802" }
links:
  github: "https://github.com/Strange-Philip/f1-pitstop-prediction"
  live: "https://www.kaggle.com/competitions/playground-series-s6e5/"
paper:
  abstract: "A machine learning pipeline for predicting whether an F1 driver will pit on the next lap, entered in Kaggle Playground Series S6E5. Ranked 2,193 out of 33,062 submissions across 2,802 teams. CatBoost baseline achieved 0.9434 AUC on held-out validation data."
  problem: "Pit stop decisions in Formula 1 are high-stakes, time-critical calls shaped by tire degradation, track position, competitor strategies, and lap-time trends — all encoded as noisy, sequential signals. No single metric determines a pit; the decision emerges from a combination of weak signals across many features."
  method: "CatBoost gradient boosting on tabular lap-by-lap race data from the Kaggle S6E5 dataset. Features include tire compound, TyreLife, Stint duration, LapTime_Delta, driver identity, and position. Engineered wear signals capture degradation trends; planned lag and rolling features will improve sequential context."
  results: "Ranked 2,193 / 33,062 submissions (2,802 teams). Baseline CatBoost model: 0.9434 validation AUC. Top predictors: LapTime_Delta, Stint duration, TyreLife. Actively iterating on feature engineering ahead of competition close."
  limitations: "Current model treats each lap independently — no sequence modeling. Pit strategy is inherently multi-lap and reactive to competitor moves, which tabular features alone cannot fully capture. Rolling and lag features are planned but not yet implemented."
---

## Overview

F1 pit stop timing is one of the most consequential decisions in a race. A lap too early and you lose track position; a lap too late and your tires fall off the cliff. The call is made under pressure, in seconds, from a stream of telemetry data.

This project is my entry in **Kaggle Playground Series S6E5** — a competition with 2,802 teams and 33,062 total submissions. The goal: given the current race state, predict whether a driver will pit on the next lap.

Currently ranked **2,193 / 33,062** with active iterations in progress.

## Problem Framing

Binary classification over lap-by-lap race telemetry. Each row represents a single lap for a single driver in a race. The target is `PitNextLap` — a binary signal derived from the pit stop event log. Submissions are evaluated on **ROC AUC**.

The challenge is signal quality. Pit decisions are rare events in any given race, creating class imbalance. They also depend on information that isn't always cleanly encoded: competitor strategy, safety car periods, weather, and team radio calls all influence the decision in ways tabular features can only approximate.

## Feature Engineering

The most predictive signals so far:

- **LapTime_Delta** — lap time relative to the driver's own recent pace; captures tire degradation better than raw lap time
- **Stint duration** — laps since last pit stop; longer stints correlate with increasing pit probability
- **TyreLife** — directly tracks compound wear state
- **Tire compound** — categorical; softs pit earlier, hards run longer
- **Driver identity** — some drivers and teams are more aggressive on tire strategy
- **Track position and gap** — competitive context for undercut/overcut decisions

Planned additions: rolling averages of lap time delta over a 3–5 lap window, lag features for prior lap events, and opponent stint length features.

## Model

CatBoost gradient boosting handles the mix of categorical and numerical features natively without manual encoding. Trained on the competition dataset with a held-out validation split.

Baseline validation AUC: **0.9434** — a strong starting point given the inherent noise in the target signal.

![Feature importance — what the model learned](/images/f1-pitstop-prediction/feature-importance.png)

## Why This Project

Strategy is a form of applied prediction under uncertainty — the same framing I use in clinical work. An optometrist reading OCT progression data and a strategist reading tire telemetry are solving structurally similar problems: when do you act, and on what signal? This project is an exploration of that question in a domain with public data and measurable outcomes.
