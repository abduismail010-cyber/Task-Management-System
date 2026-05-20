# Task Management System

A full-featured Task Management REST API built with Node.js, Express.js, and MongoDB following clean architecture principles.



# Features

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Search Tasks
- Filter Tasks
- Validation Middleware
- Global Error Handling
- Swagger API Documentation
- Unit Testing with Jest & Supertest



# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Testing
- Jest
- Supertest

## Documentation
- Swagger UI
- Swagger JSDoc



# Project Structure

```text
server/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middlewares/
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   └── taskModel.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── tests/
│   │   └── task.test.js
│   │
│   ├── validators/
│   │   └── taskValidator.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```



# Installation

## Clone Repository

```bash
git clone https://github.com/abduismail010-cyber/Task-Management-System.git
```



## Navigate to Server Folder

```bash
cd Task-Management-System/server
```



## Install Dependencies

```bash
npm install
```



# Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/task-manager-db
```



# Run the Project

## Development Mode

```bash
npm run dev
```



## Production Mode

```bash
npm start
```



# API Documentation

Swagger UI available at:

```text
http://localhost:5000/api-docs
```



# API Endpoints

| Method | Endpoint | Description |
||||
| POST | `/api/tasks` | Create Task |
| GET | `/api/tasks` | Get All Tasks |
| GET | `/api/tasks/:id` | Get Single Task |
| PUT | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |



# Search & Filter Examples

## Search

```text
GET /api/tasks?search=project
```



## Filter by Status

```text
GET /api/tasks?status=pending
```



## Filter by Priority

```text
GET /api/tasks?priority=high
```



# Running Tests

```bash
npm test
```



# Test Results

- GET All Tasks Test
- Create Task Test



# Validation Rules

- Title is required
- Title length must be between 3 and 100 characters
- Status must be:
  - pending
  - in-progress
  - completed
- Priority must be:
  - low
  - medium
  - high



# Author

ABDELWAHAB ISMAIL



# License

This project is licensed for educational purposes.

=======
# Task Management System

A full-featured Task Management REST API built with Node.js, Express.js, and MongoDB following clean architecture principles.



# Features

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Search Tasks
- Filter Tasks
- Validation Middleware
- Global Error Handling
- Swagger API Documentation
- Unit Testing with Jest & Supertest



# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Testing
- Jest
- Supertest

## Documentation
- Swagger UI
- Swagger JSDoc



# Project Structure

```text
server/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middlewares/
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   └── taskModel.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── tests/
│   │   └── task.test.js
│   │
│   ├── validators/
│   │   └── taskValidator.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```



# Installation

## Clone Repository

```bash
git clone https://github.com/abduismail010-cyber/Task-Management-System.git
```



## Navigate to Server Folder

```bash
cd Task-Management-System/server
```



## Install Dependencies

```bash
npm install
```



# Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/task-manager-db
```



# Run the Project

## Development Mode

```bash
npm run dev
```



## Production Mode

```bash
npm start
```



# API Documentation

Swagger UI available at:

```text
http://localhost:5000/api-docs
```



# API Endpoints

| Method | Endpoint | Description |
||||
| POST | `/api/tasks` | Create Task |
| GET | `/api/tasks` | Get All Tasks |
| GET | `/api/tasks/:id` | Get Single Task |
| PUT | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |



# Search & Filter Examples

## Search

```text
GET /api/tasks?search=project
```



## Filter by Status

```text
GET /api/tasks?status=pending
```



## Filter by Priority

```text
GET /api/tasks?priority=high
```



# Running Tests

```bash
npm test
```



# Test Results

- GET All Tasks Test
- Create Task Test



# Validation Rules

- Title is required
- Title length must be between 3 and 100 characters
- Status must be:
  - pending
  - in-progress
  - completed
- Priority must be:
  - low
  - medium
  - high



# Author

ABDELWAHAB ISMAIL



# License

This project is licensed for educational purposes.

