# 🧩 Task Manager React App

A fully functional **React + Vite + Tailwind CSS** web application built as part of the **PLP Full Stack MERN Week 3 Assignment**.

This app demonstrates:
- Component-based architecture
- State management with React hooks
- API integration
- Responsive Tailwind CSS design
- Light/Dark theme toggling

---

## 🚀 Live Demo

👉 [View Deployed App](https://[your-vercel-or-netlify-app].vercel.app)

---

## 📸 Screenshots

### 🌞 Light Mode
![Light Mode Screenshot](./screenshots/light-mode.png)

### 🌙 Dark Mode
![Dark Mode Screenshot](./screenshots/dark-mode.png)

---

## 🛠️ Features

✅ **Task Manager**
- Add, mark complete, and delete tasks  
- Filter by All / Active / Completed  
- Tasks persist via localStorage  

✅ **API Integration**
- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Displays posts with loading and error handling
- Supports search and pagination

✅ **Theming**
- Light/Dark mode toggle with smooth transitions  
- Theme persists using `useContext` and `useEffect`

✅ **Responsive Design**
- Fully responsive layout for mobile, tablet, and desktop  
- Built entirely with Tailwind CSS utility classes

✅ **Reusable Components**
- Button (primary, secondary, danger)
- Card layout
- Navbar and Footer with consistent styling

---

## 📂 Project Structure

┣ components/
┃ ┣ Button.jsx
┃ ┣ Card.jsx
┃ ┣ Navbar.jsx
┃ ┣ Footer.jsx
┃ ┗ TaskManager.jsx
┣ pages/
┃ ┗ ApiData.jsx
┣ hooks/
┃ ┗ useLocalStorage.js
┣ context/
┃ ┗ ThemeContext.jsx
┣ App.jsx
┣ main.jsx
┗ index.css