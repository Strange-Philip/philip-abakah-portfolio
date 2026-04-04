---
title: "Hunu"
tagline: "Telemedicine app for rural vision screening and eye care access"
status: "archived"
featured: false
order: 6
image: "/images/hunu/main.jpeg"
imageAlt: "Hunu telemedicine app interface for rural vision screening"
tags: ["Flutter", "Telemedicine", "Healthcare", "Mobile", "Firebase"]
metrics:
  - { label: "Target", value: "Rural Communities" }
  - { label: "Operator", value: "Non-Clinician" }
  - { label: "Function", value: "Vision Screening" }
recognition:
  - "Built for Anidaso Eye Centre (2022–2023)"
year: "2023"
paper:
  abstract: "Hunu is a telemedicine platform enabling non-clinician community health workers to conduct structured vision screening in rural Ghanaian communities and refer cases to specialist eye care."
  problem: "Rural communities in Ghana lack access to optometrists. Vision loss from treatable conditions — cataracts, glaucoma, refractive error — goes undetected until advanced stages, resulting in preventable blindness."
  method: "Flutter mobile app with guided screening protocols designed for non-clinicians. Firebase backend for case record storage and remote review. Structured data collection for visual acuity, symptoms, and ocular history."
  results: "Deployed in outreach screening programs through Anidaso Eye Centre. Enabled non-clinicians to conduct structured screenings and flag referral cases for specialist review."
  limitations: "Screener training required for protocol adherence. No automated image capture or AI-assisted triage. Archived after pilot phase — not in active deployment."
---

## Overview

Hunu is a mobile telemedicine application built for Anidaso Eye Centre to extend eye care access into rural communities in Ghana. The app enables non-clinicians — community health workers, trained volunteers — to conduct standardized visual acuity tests and submit results to remote optometrists for review.

The name "Hunu" means "to see" in Fante, one of Ghana's regional languages.

## The Problem

Rural access to eye care in Ghana remains severely limited. Most optometrists are concentrated in urban centers; patients in smaller towns and villages may go years without a basic eye examination. The consequence is preventable vision loss — from uncorrected refractive errors, undetected glaucoma, and manageable conditions that progress due to late diagnosis.

Hunu was built to create a pathway: bring a standardized screening tool to where patients already are, and connect the results to a clinician who can review and recommend follow-up.

## How It Works

Community health workers use the Hunu app to:

1. **Register patients** — basic demographic intake
2. **Administer visual acuity tests** — standardized charts adapted for on-screen delivery, usable without a trained clinician present
3. **Submit results** — test data is transmitted to a remote optometrist dashboard for review
4. **Receive recommendations** — the reviewing clinician flags cases requiring in-person follow-up and generates referral letters within the app

The design prioritizes simplicity for the operator — the interface guides non-clinicians through each step with minimal room for error.

## My Role

As Project Manager and Software Engineer at Anidaso Eye Centre, I was responsible for both the technical build (Flutter mobile app, Firebase backend) and the operational design — determining which tests could be standardized for non-clinical administration and what the handoff protocol between field worker and remote clinician should look like.

## Outcome

Hunu enabled Anidaso to extend screening capacity beyond the clinic's immediate catchment area. The project demonstrated that structured, low-cost telemedicine can be a practical tool for eye care access in resource-limited settings — a model relevant across much of sub-Saharan Africa.
