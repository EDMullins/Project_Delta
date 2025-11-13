# 🎯 Project Delta  
### *"Close ads faster!"*

---

## 🧠 Purpose
**Project Delta** demonstrates how *bad design choices in mobile game ads* create frustration and inefficiency for users.  
It compares two versions of an ad interface:
1. A **Bad Flow** that takes multiple confusing steps to close.
2. A **Good Flow** that prioritizes user control and clarity.

This project highlights how clear, efficient, and ethical design can dramatically improve user experience.

---

## 👤 User Story

**As a user**, I want to close or skip mobile ads quickly
**So that** I can return to my game without unnecessary clicks or confusion.

---

## 🧩 Test Case

### Scenario
A player launches a mobile game and an ad appears.

- In the **Bad Flow**, the user must go through **three screens** before returning to gameplay.  
- In the **Good Flow**, the user exits in **one step** after a short visible timer.

### Expected Behavior
- Buttons and icons behave predictably.  
- The number of clicks and total interaction time are recorded in the console.

---

## 📊 Metric / Measurement for Success

| Metric | Goal | Description |
|--------|------|--------------|
| **Clicks to Exit** | Fewer clicks | Count the total number of user interactions before returning to gameplay. |
| **Time to Exit** | Faster | Measure elapsed time (ms) between ad start and close using the `Performance API`. |
| **Clarity** | Higher | No misleading icons, hidden timers, or deceptive buttons. |
| **User Satisfaction** | Increased | The “Good Flow” should feel smoother, transparent, and respectful of the user’s time. |

---

## ✅ Validation Links

- **Accessibility (a11y)**: [WAVE Report](https://wave.webaim.org/report#/https://edmullins.github.io/Project_Delta/)  
- **HTML Validation (Nu Checker)**: [Nu Report](https://validator.w3.org/nu/?doc=https%3A%2F%2Fedmullins.github.io%2FProject_Delta%2F)  
- **Live Demo**: [https://edmullins.github.io/Project_Delta/](https://edmullins.github.io/Project_Delta/)

All validation errors and accessibility warnings have been reviewed and resolved.

---

## 🏗️ Infrastructure & Architecture

### **Architecture Pattern**
This project follows a **Component-Based Frontend Architecture**:
- Each ad flow (Bad / Good) is treated as an independent, reusable component.  
- A single **FlowRunner** class controls logic, state, and transitions for each variant.  
- The structure emphasizes **separation of concerns**:
  - *HTML*: semantic content and layout  
  - *CSS*: presentation and theming  
  - *JavaScript*: logic, flow control, and interactivity  

This modular pattern allows for scalability — additional ad types or metrics can be added easily without rewriting the core code.

---

## ⚙️ Infrastructure / Tech Stack

### **Languages**
- **HTML5** – Semantic structure and content.  
- **CSS3** – Styling, layout, and responsive design using Flexbox and Grid.  
- **JavaScript (ES6)** – Logic for ad flow simulation, timing, and metrics.

### **Libraries & Frameworks**
- **Bootstrap 5.3.3** – Layout grid, utilities, and responsive components.  
- **Bootstrap Icons 1.11.3** – Vector icons for UI clarity.  
- **Google Fonts** – *JetBrains Mono* and *Noto Serif* for distinctive typography.

### **Hosting & Version Control**
- **GitHub** – Source code management and version tracking.  
- **GitHub Pages** – Live deployment of the interactive demo.

### **Accessibility & Validation Tools**
- **WAVE WebAIM** – Accessibility compliance verification.  
- **W3C Nu HTML Checker** – Ensures valid, semantic HTML.

---

## 🧠 Attribution

### **Developer**
👨‍💻 *Ethan Mullins* 
🔗 [GitHub Profile](https://github.com/EDMullins)  

### **Code Sources & References**
- Base logic and structure written from scratch.  
- Validation & accessibility verified using **W3C** and **WAVE** tools.  
- Visual inspiration: Figma was used to create a prototype

### **AI Assistance**
- **Model:** *OpenAI GPT-5*  
- **Role in Development:**   
  - Helped refine structure for README.
