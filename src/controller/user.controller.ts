import { Context } from "hono";

export const signupUser = async (c: Context) => {
  const body = await c.req.json();
  return c.json({ body });
};
