---
title: "Simple Floating Bottom Nav Bar"
tagline: "Fully customizable floating bottom navigation bar package for Flutter"
status: "live"
featured: false
order: 7
image: "https://raw.githubusercontent.com/Strange-Philip/simple_floating_bottom_nav_bar/main/images/floating.gif"
imageAlt: "Simple Floating Bottom Nav Bar demo"
tags: ["Flutter", "Dart", "Open Source", "UI Component", "Pub.Dev"]
metrics:
  - { label: "Pub Points", value: "150" }
  - { label: "Likes", value: "12" }
  - { label: "Platforms", value: "Android · iOS · Web · Desktop" }
  - { label: "License", value: "MIT" }
links:
  github: "https://github.com/Strange-Philip/simple_floating_bottom_nav_bar"
  live: "https://pub.dev/packages/simple_floating_bottom_nav_bar"
year: "2023"
---

## Overview

`simple_floating_bottom_nav_bar` is an open-source Flutter package that provides a fully customizable floating bottom navigation bar component. Published on pub.dev under a verified publisher, it supports all major Flutter platforms out of the box.

The package was built to fill a gap in the Flutter ecosystem — a bottom nav bar that floats above content with clean, configurable styling and minimal setup.

## Features

- Fully customizable active and inactive icon states
- Configurable background color, padding, elevation, border radius, width, and height
- Custom labels per navigation item
- Cross-platform: Android, iOS, Linux, macOS, Web, Windows
- Simple drop-in API — import, define items, pass to the widget

## Usage

```dart
FloatingBottomNavBar(
  items: [
    FloatingNavBarItem(icon: Icons.home, label: 'Home'),
    FloatingNavBarItem(icon: Icons.search, label: 'Search'),
    FloatingNavBarItem(icon: Icons.add, label: 'Add'),
    FloatingNavBarItem(icon: Icons.person, label: 'Profile'),
  ],
  onTap: (index) => setState(() => _currentIndex = index),
  currentIndex: _currentIndex,
)
```

## Why I Built It

At the time, most available floating nav bar packages were either too opinionated or poorly maintained. I needed something lightweight, configurable, and production-ready for projects I was working on — so I built and published it as an open-source package for the Flutter community.
