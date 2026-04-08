# 📅 Interactive Wall Calendar Component

## 🚀 Overview

This project is a **frontend-only interactive calendar component** built using React. It is inspired by a physical wall calendar but reimagined with a modern, visually rich UI.

The design follows a **“Polaroid Wall Calendar” theme**, combining:

* A **hero image** (like a pinned photo)
* A **clean calendar grid**
* A **sticky notes section** for user inputs

The goal was to balance **aesthetic appeal + usability**, while ensuring smooth interactions and responsiveness.

---

## 🎨 Design Decisions

### 1. Polaroid-Style Hero Section

* Adds a strong visual anchor
* Makes the UI feel less “data-heavy”
* Enhances user engagement

### 2. Date Range Selection

* Users can select a **start and end date**
* Clear visual states:

  * Start → highlighted
  * End → highlighted
  * In-between → soft background
* Improves usability for planning tasks/events

### 3. Notes System

* Users can:

  * Add notes for specific dates or ranges
  * Edit/Delete notes
* Styled like **sticky notes** for a real-world feel
* Stored in **localStorage** (no backend required)

### 4. Responsive Layout

* **Desktop:** Side-by-side layout (image + calendar + notes)
* **Mobile:** Stacked layout for easy touch interaction

### 5. Smooth UX

* Hover effects on dates
* Subtle animations for interactions
* Clean spacing and typography

---

## 🛠 Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **localStorage** (for persistence)

---

## 📁 Project Structure

```
src/
  components/
    CalendarGrid.jsx
    DateCell.jsx
    HeroImage.jsx
    NotesPanel.jsx
  hooks/
    useCalendar.js
    useDateRange.js
    useLocalStorage.js
  utils/
    dateUtils.js
  App.jsx
  main.jsx
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## ✨ Features

* 📆 Monthly calendar view
* 🔁 Month navigation (prev/next)
* 🎯 Date range selection
* 📝 Notes with persistence
* 📱 Fully responsive design
* 🎨 Unique UI (polaroid + sticky notes)
* ⚡ Smooth interactions

---

## 📌 Notes

* This project is **strictly frontend-focused**
* No external calendar libraries were used
* All logic (date handling, range selection) is implemented manually

---

## 🌟 Future Improvements

* Drag-to-select date ranges
* Theme auto-generation based on image colors
* Holiday/event markers
* Export notes feature

---

## 🎥 Demo

(Add your Loom/YouTube link here)

---

## 🌐 Live Demo

poloroid-wall-calendar-apubtav36-krishan2005ops-projects.vercel.app

---

## 🙌 Final Thoughts

This project focuses on **clean architecture, strong UX, and creative UI design**.
It demonstrates the ability to transform a static concept into a **fully interactive and responsive component**.
