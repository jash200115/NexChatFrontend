# 🚀 NexDiscord – Real-Time Chat Application

A full-stack real-time chat application inspired by Discord, built using **Spring Boot + WebSocket (STOMP) + React + Tailwind CSS + MongoDB Atlas**, and deployed fully to the cloud using **Render**.

---

## 🌐 Live Links

**Frontend (Live App):**  
https://yournexdiscord.onrender.com/

**Backend API:**  
https://nexchat-77ip.onrender.com/

---

## ✨ Features

- 🔥 Real-time messaging using WebSockets (STOMP over SockJS)
- 👥 Join or create chat rooms
- 🧑 User-based message alignment (WhatsApp-style UI)
- 🗄 Persistent chat history using MongoDB Atlas
- 🎨 Discord-inspired modern UI (Tailwind CSS)
- 🌙 Dark themed interface
- 🚀 Fully deployed frontend & backend on Render

---

## 🏗 Architecture Overview

Frontend (React + Vite + Tailwind)
            |
            | REST API (Axios)
            | WebSocket (SockJS + STOMP)
            ↓
    Backend (Spring Boot)
            |
            ↓
MongoDB Atlas (Cloud Database)


---

## 🛠 Tech Stack

### 🔹 Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- SockJS Client
- STOMP.js
- React Hot Toast

### 🔹 Backend
- Spring Boot
- Spring Web
- Spring WebSocket
- STOMP Messaging
- MongoDB
- Docker
- Render Deployment

### 🔹 Database
- MongoDB Atlas (M0 Free Tier)

---

## 📡 WebSocket Flow

- Client connects to: /chat
- Messages are sent to: /app/sendMessage/{roomId}
- Subscribed to: /topic/room/{roomId}

All connected users inside the same room receive messages instantly.

---

## 🌍 Deployment Details

### Backend
- Hosted on Render (Docker deployment)
- Uses environment variables for:
- MongoDB URI
- Frontend URL (CORS configuration)
- Health check endpoint: /health

Backend URL:
https://nexchat-77ip.onrender.com/

---

### Frontend
- Hosted on Render Static Site
- Environment variable used: VITE_API_BASE_URL=https://nexchat-77ip.onrender.com

Live App:
https://yournexdiscord.onrender.com/
---

## 📈 Future Improvements

- Authentication (JWT)
- Private rooms
- File uploads
- User presence indicators
- Typing indicators
- Redis message broker for scalability
- Horizontal WebSocket scaling

---

## 👨‍💻 Author

**Jash Roy**  
SDE 1 | Java Developer  
