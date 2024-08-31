import { Request, Response } from "express";
import prisma from "../utils/prismaClient";

export const reportSpam = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { phoneNumber } = req.body;

  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    await prisma.spamReport.create({
      data: {
        phoneNumber,
        userId: req.user.id,
      },
    });
    res.status(201).json({ message: "Spam report created successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Error reporting spam" });
  }
};
