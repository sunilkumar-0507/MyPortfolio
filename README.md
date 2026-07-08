# Sunil Kumar — Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite**, featuring a **three.js** animated hero, real branded tech icons, animated count-up stats, and smooth scroll transitions.

🔗 **Live:** _add your deployment URL here_

## ✨ Features

- **three.js** animated hero background (rotating wireframe + particle field with mouse parallax)
- Real branded SVG icons via `react-icons`
- Animated count-up statistics
- Scroll-reveal transitions across all sections
- Custom cursor, particle/grid backdrop, fully responsive layout
- All content centralized in a single `src/data.js` file for easy editing

## 🧩 Sections

Home · About (with Career Objective & Why Choose Me) · Services · Skills · Projects · Experience · Development Process · Education · Contact

## 🛠️ Tech Stack

- **Framework:** React 18, Vite
- **3D / Animation:** three.js
- **Icons:** react-icons
- **Styling:** Plain CSS (custom design system)

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/   UI sections (Hero, About, Services, Skills, Projects, …)
├── hooks/        useReveal (scroll animations)
├── icons.jsx     branded SVG icon maps
├── data.js       all portfolio content (single source of truth)
└── styles.css    global styles & design tokens
public/
├── favicon.svg
└── profile.jpg   your profile photo
```

## ✏️ Editing Content

Update your details — skills, services, projects, experience, contact — in [`src/data.js`](src/data.js). No component changes needed.

---

Designed & Developed by **Sunil Kumar** · Building scalable software with passion, precision, and purpose.
