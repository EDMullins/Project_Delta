# Project Delta

## Purpose
This project demonstrates a common mobile UX anti-pattern, multi-screen ad exit flows, and presents a prototype redesign that reduces taps and time-to-exit. The repository contains a small web prototype and instructions to measure improvement.

## User story
As a user of mobile apps, I want to exit intrusive ads quickly so I can get back to my game with fewer taps and less confusion.

## Short tagline
Exit ads faster — fewer taps, clearer exit affordance.

## What the app shows
- **Before**: a simulated ad flow with 3 screens to reach the real content and a delayed "close" button.
- **After**: a redesigned single-screen ad with a clear, accessible close button and a visible skip timer.

## Test case
- Scenario A (bad): Start ad → open store → leave or download → final close (3 interactions).
- Scenario B (good): Start ad → immediate visible skip (1 interaction).

## Metrics for success
- Clicks-per-exit (primary)
- Time-to-exit in milliseconds (secondary)

## Accessibility validation
Run WAVE and Nu HTML Checker on the deployed page:
- WAVE: [Click here to view](https://wave.webaim.org/report#/https://edmullins.github.io/Project_Delta/)
- Nu HTML Checker: [Click here to view](https://validator.w3.org/nu/?doc=https%3A%2F%2Fedmullins.github.io%2FProject_Delta%2F)

## Tech Stack

### Frontend
- **HTML5** – Provides the structure and semantic layout for the webpage.  
- **CSS3** – Custom styling with CSS variables, Grid, and Flexbox for responsive and modern design.  
  - **Google Fonts** – *JetBrains Mono* (for a tech-style monospace aesthetic) and *Noto Serif* (for elegant headers).  
  - **Bootstrap 5** – Supplies grid layout, spacing utilities, and consistent styling.  
  - **Bootstrap Icons** – Lightweight vector icons for interactive UI elements.  

### JavaScript (Vanilla ES6)
- Powers all ad flow interactions and transitions without relying on frameworks.  
- **Dynamic DOM Manipulation** – Creates and updates ad screens programmatically.  
- **FlowRunner Class** – Controls both “Bad” and “Good” ad simulations, records click counts, and measures user exit times.  
- **Performance API** – Uses `performance.now()` to measure interaction duration for analysis.  

### Libraries & Dependencies
- **Bootstrap JS (v5.3.3)** – Handles responsive UI behaviors and components.  

### Version Control & Hosting
- **GitHub** – Manages source control and collaboration.  
- **GitHub Pages** – Hosts the live interactive demo:  
  [https://edmullins.github.io/Project_Delta/](https://edmullins.github.io/Project_Delta/)

## Attribution
- Code authored by: Ethan Mullins
- Design ideas inspired by common mobile ad patterns.
- AI assistance: ChatGPT used to generate this ReadMe
