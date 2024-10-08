// src/routes/userRouter.ts
import { Hono } from "hono";
import { signupUser } from "../controller/user.controller";

export const userRouter = new Hono<{ Bindings: { DATABASE_URL: string } }>();

userRouter.post("/signup", signupUser);
