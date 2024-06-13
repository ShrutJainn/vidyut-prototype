import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient().$extends(withAccelerate());

import { env } from "hono/adapter";

import { Hono } from "hono";
import { cors } from "hono/cors";

import { SignJWT } from "jose";
import bcrypt from "bcryptjs";
import { z } from "zod";

type Bindings = {
  JWT_SECRET: string;
};
type Variables = {
  user: any;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();
// const app = new Hono();
app.use("/api/*", cors());

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// const secret = new TextEncoder().encode("your-256-bit-secret");

// app.route("/api/users", userRouter);
// app.route("/api/coins", coinsRouter);

// app.onError((err, c) => {
//   console.error("Error caught in onError:", err);
//   return c.text("Internal Server Error", 500);
// });

app.post("/api/users/signup", async (c) => {
  try {
    const jwtSecret = c.env.JWT_SECRET;
    const secret = new TextEncoder().encode(jwtSecret);
    const body = await c.req.json();
    const { success } = signupSchema.safeParse(body);
    if (!success) return c.json({ error: "Invalid input types" }, 411);

    const { username, email, name, password } = body;

    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (user)
      return c.json({ error: "User with that username already exists" }, 400);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        name,
        password: hashedPassword,
      },
    });
    const jwt = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1w")
      .sign(secret);

    // return c.json({ msg: "User created successfully", newUser, jwt }, 200);
    return c.json(
      {
        msg: "User created successfully",
        jwt,
        user: {
          ...newUser,
          password: undefined, // This will explicitly remove the password field
        },
      },
      200
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

app.post("/api/users/login", async (c) => {
  try {
    const jwtSecret = c.env.JWT_SECRET;
    const secret = new TextEncoder().encode(jwtSecret);
    const body = await c.req.json();
    const { success } = loginSchema.safeParse(body);
    if (!success) return c.json({ error: "Invalid inputs" }, 411);

    const { username, password } = body;
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    let isValidPassword;
    if (user) {
      isValidPassword = bcrypt.compareSync(password, user.password);
    }

    if (!user || !isValidPassword)
      return c.json({ error: "Invalid email or password" }, 400);

    const jwt = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1w")
      .sign(secret);

    return c.json(
      {
        msg: "User logged in successfully",
        jwt,
        user: {
          ...user,
          password: undefined,
        },
      },
      200
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

app.get("/api/users/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        username: true,
        email: true,
        name: true,
      },
    });

    if (!user) return c.json({ error: "User not found" }, 411);

    return c.json(user, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

export default app;
