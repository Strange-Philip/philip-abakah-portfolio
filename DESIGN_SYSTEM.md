---

system: Philip Design System
version: 1.0
author: Philip Abakah
philosophy: "Clarity. Precision. Human-centered intelligence."
inspired_by: Apple Human Interface Principles
---------------------------------------------

# Design System

## 01 — Philosophy

This system is built on three core principles:

### Clarity

Every element must communicate its purpose instantly.
No decoration without meaning.

### Deference

The interface does not compete with content.
Content is the product.

### Depth

Hierarchy is expressed through spacing, typography, and subtle layering — not heavy visuals.

---

## 02 — Design Principles

### 1. Reduction

Remove before adding.
If something can be removed without loss of meaning, it should be removed.

### 2. Functional Aesthetics

Visual design must reflect system function.
Beauty is a byproduct of correctness.

### 3. Consistency

Patterns repeat across the system.
Users should never have to “learn” the interface twice.

### 4. Human Context First

Design decisions prioritize real-world usage over visual novelty.

### 5. Performance as Design

Speed, responsiveness, and reliability are part of the interface.

---

## 03 — Color System

Minimal, intentional, restrained.

### Base Colors

```css
--color-background-primary: #FFFFFF;
--color-background-secondary: #F5F5F7;

--color-text-primary: #0A0A0A;
--color-text-secondary: #6E6E73;
--color-text-tertiary: #A1A1A6;

--color-border: #E5E5EA;
```

### Accent System

```css
--color-accent-primary: #0071E3;   /* Apple-like blue */
--color-accent-secondary: #34C759; /* success / confirmation */
--color-accent-warning: #FF9F0A;
--color-accent-danger: #FF3B30;
```

### Usage Rules

* Accent color is used sparingly (<5% of UI)
* Text contrast must always be high
* Backgrounds remain neutral

---

## 04 — Typography System

Typography is the primary hierarchy tool.

### Font Stack

```css
--font-display: -apple-system, SF Pro Display, Inter, sans-serif;
--font-body: -apple-system, SF Pro Text, Inter, sans-serif;
--font-mono: JetBrains Mono, monospace;
```

### Scale

```css
--text-xxl: 48px;
--text-xl: 32px;
--text-lg: 24px;
--text-md: 18px;
--text-sm: 14px;
--text-xs: 12px;
```

### Rules

* Headlines: bold, tight tracking
* Body: regular weight, high readability
* Line height: 1.4 – 1.6
* Never use more than 3 font sizes per section

---

## 05 — Spacing & Layout

Whitespace defines structure.

### Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 24px;
--space-5: 40px;
--space-6: 64px;
--space-7: 96px;
--space-8: 128px;
```

### Layout Rules

* Max content width: 1100px
* Grid: asymmetric 2-column layout
* Section spacing: 96px–128px
* Alignment: left-aligned (default)

---

## 06 — Components

### Buttons

```css
button.primary {
  background: var(--color-accent-primary);
  color: white;
  padding: 12px 20px;
  border-radius: 999px;
}
```

Rules:

* Clear action labels
* No unnecessary shadows
* Subtle hover feedback only

---

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px;
}
```

Rules:

* Used for grouping, not decoration
* Avoid overuse

---

### Dividers

```css
.divider {
  height: 1px;
  background: var(--color-border);
}
```

---

## 07 — Motion System

Motion communicates state, not decoration.

### Principles

* Fast (<300ms)
* Subtle
* Purpose-driven

### Examples

* Fade in (content entry)
* Scale (interaction feedback)
* Slide (navigation transitions)

---

## 08 — Interaction Design

### Feedback

* Every interaction must produce feedback
* No silent actions

### Touch Targets

* Minimum: 44px height

### States

* Default
* Hover
* Active
* Disabled

---

## 09 — Accessibility

Design must work for everyone.

### Rules

* High contrast text
* Screen reader compatibility
* Semantic HTML structure
* Keyboard navigation support

---

## 10 — Content System

### Writing Style

* Clear
* Direct
* Minimal

### Tone

* Calm
* Confident
* Technical but human

### Example

❌ “I am passionate about building innovative solutions”
✅ “I build systems that work in real-world environments”

---

## 11 — Data & System UI

### Metrics Display

* Accuracy
* Latency
* Success rate

### Rules

* Numbers > adjectives
* Show real data when possible

---

## 12 — Visual Identity

### Characteristics

* Minimal
* Precise
* Structured
* Quietly confident

### Avoid

* Over-animation
* Bright gradients
* Excess icons
* Visual noise

---

## 13 — Implementation Notes

### Performance

* Prefer static rendering
* Minimize JavaScript
* Optimize images

### Responsiveness

* Mobile-first
* Fluid spacing
* Adaptive typography

---

## 14 — System Behavior

The system should feel:

* Instant
* Predictable
* Calm
* Reliable

Users should never think about the interface.
Only the content.

---

# Closing

This is not a visual style.

It is a way of thinking.

Design is not what it looks like.
Design is how it works.
