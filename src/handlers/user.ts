import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../utils/prismaClient";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, phoneNumber, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: { username, phoneNumber, email, password: hashedPassword },
    });
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Username or phone number already exists" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { phoneNumber, password } = req.body;

  //   console.log("Username:", username);
  try {
    const user = await prisma.user.findUnique({ where: { phoneNumber } });
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET
    );
    res.json({ token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Internal server error" }); // Return a generic error response
  }
};
