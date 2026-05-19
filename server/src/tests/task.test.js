const request = require("supertest");

const mongoose = require("mongoose");

require("dotenv").config();

const app = require("../app");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Task API Tests", () => {
  it("should get all tasks", async () => {
    const response = await request(app).get(
      "/api/tasks"
    );

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);
  });

  it("should create a new task", async () => {
    const newTask = {
      title: "Unit Test Task",
      description: "Testing create API",
      priority: "high",
      status: "pending",
      category: "Testing",
    };

    const response = await request(app)
      .post("/api/tasks")
      .send(newTask);

    expect(response.statusCode).toBe(201);

    expect(response.body.success).toBe(true);

    expect(response.body.data.title).toBe(
      newTask.title
    );
  });
});