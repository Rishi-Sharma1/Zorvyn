## Overview

This project is a backend system for a finance dashboard application. It provides APIs for managing users, financial records, and dashboard analytics with role-based access control.

The system is designed with a focus on clean architecture, maintainability, and proper handling of business logic.

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Authentication: JWT (JSON Web Tokens)
* Validation: Manual validation (controller-level)

---

## Project Structure

```
backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── app.js
│
├── server.js
├── .env
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/finance-dashboard
JWT_SECRET=supersecretkey
```

### 4. Start the server

```
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

## Authentication

* JWT-based authentication is implemented
* Users must login to receive a token
* Token must be passed in headers:

```
Authorization: Bearer <token>
```

---

## User Roles

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View records and dashboard           |
| Analyst | View records and analytics           |
| Admin   | Full access (CRUD + user management) |

---

## API Endpoints

### Auth

* POST /api/auth/register → Register user
* POST /api/auth/login → Login and get token

---

### Users (Admin Only)

* GET /api/users → Get all users
* PATCH /api/users/:id → Update user

---

### Records

* POST /api/records → Create record (Admin)
* GET /api/records → Get records (All users)
* PUT /api/records/:id → Update record (Admin)
* DELETE /api/records/:id → Delete record (Admin)

Filtering example:

```
GET /api/records?type=income&category=salary&startDate=2026-01-01&endDate=2026-12-31
```

---

### Dashboard

* GET /api/dashboard/summary → Total income, expense, balance
* GET /api/dashboard/categories → Category-wise totals

---

## Access Control

Role-based access control is implemented using middleware.
Each route checks user role before allowing access.

---

## Features Implemented

* User and Role Management
* Financial Records CRUD
* Record Filtering (date, category, type)
* Dashboard Summary APIs
* Role-Based Access Control
* Input Validation and Error Handling
* Data Persistence (MongoDB)

---

## Validation and Error Handling

* Required fields are validated at controller level
* Invalid inputs return appropriate status codes
* Errors are handled using try-catch blocks

---

## Testing

APIs can be tested using Postman.

Steps:

1. Register user
2. Login and get token
3. Add token in Authorization header
4. Access protected routes

---

## Assumptions

* Roles are predefined (viewer, analyst, admin)
* Only admin can modify records and users
* Basic validation is implemented at controller level
* MongoDB is used for persistence



