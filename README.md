# 📁 Project Management Tool

A full-stack, real-time collaborative project management application built with **NestJS**, **Next.js**, **Docker**, and **PostgreSQL**. It supports **modular architecture**, **role-based access**, **task dependencies**, and **real-time collaboration**, enabling teams to efficiently manage complex projects.

---

## 🚀 Features

### 🔧 Modular Architecture
- Modular NestJS backend with separate modules for:
  - User Management
  - Task Management
  - Notification System
- Optional Microservices using API Gateway and RabbitMQ/Kafka for inter-service communication

### 🧠 Intelligent Task Management
- Task creation, assignment, editing, and deletion
- Set task dependencies and visualize using Gantt charts
- Automatic task scheduling based on priority, skills, and availability
- Topological sort for dependency resolution

### 👥 Role-Based Access Control (RBAC)
- Admin, Manager, and Member roles
- Fine-grained permissions for task and project actions

### 💬 Real-Time Collaboration
- Real-time presence indication
- Live updates for task comments, status, and assignment
- Notifications for deadlines, mentions, and changes (via WebSockets + RabbitMQ/Kafka)

### ⚙️ Frontend (React / Next.js)
- Beautiful dashboard UI
- Real-time indicators for editing/viewing conflicts
- Gantt chart for task timelines
- Responsive design
- Redux Toolkit + RTK Query for state management

### ⚙️ Backend (NestJS + Express)
- RESTful and GraphQL APIs
- PostgreSQL / MongoDB for persistent data
- Redis for caching
- Elasticsearch for full-text task/project search
- Rate limiting, validation, and security middlewares

### 📊 Reporting & Analytics
- Usage tracking: active users, task completion time
- Performance reports (PDF/CSV download)
- Task delay detection and visualization

### 🧪 Testing & QA
- Unit & integration tests with **Jest**
- Frontend E2E testing with **Cypress**
- Load testing with **K6** or **Locust**
- Target: 90%+ test coverage

---

## 🐳 Dockerized Setup

### Prerequisites
- Docker & Docker Compose

### Run Locally

```bash
# Clone the repository
git clone https://github.com/YourUsername/project-management-tool.git
cd project-management-tool

# Start all services
docker-compose up --build
