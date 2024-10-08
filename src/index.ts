// src/index.ts
import { Hono } from "hono";
import { userRouter } from "./routes/user.route";

interface Bindings {
  DATABASE_URL: string; // Define your expected bindings here
}

const app = new Hono<{ Bindings: Bindings }>(); // Pass the bindings type

// Register user routes
app.route("/api/v1/users", userRouter); // Adjust the base route if needed

export default app;
