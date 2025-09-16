# MERN Todo App with Authentication

## Features
- User signup & login (JWT + bcrypt)
- Private routes (React Router)
- CRUD operations for todos (add, complete, delete)
- Secure password hashing
- Auth middleware for protected APIs

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas / local MongoDB
- **Authentication**: JWT, bcrypt

## Setup Instructions

### 1. Clone the repo / unzip this project
```bash
cd mern-todo-auth
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file inside `backend/` with:
```
MONGO_URI=<your MongoDB URI>
JWT_SECRET=<your secret key>
PORT=5000
```
- Run the backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Usage
- Go to `http://localhost:3000`
- Sign up → Login → Manage your todos

## Notes
- Ensure MongoDB is running or provide MongoDB Atlas URI.
- Default backend runs on `http://localhost:5000`.
- Frontend proxy points to backend.

