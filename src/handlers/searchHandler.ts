import { Request, Response } from "express";
import prisma from "../utils/prismaClient";


export const searchByPhoneNumber = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { phoneNumber } = req.params;

  const user = await prisma.user.findUnique({ where: { phoneNumber } });
  if (user) {
    res.json(user);
    return;
  }

  const contacts = await prisma.contact.findMany({ where: { phoneNumber } });
  res.json(contacts);
};

export const searchByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name } = req.params;

  const users = await prisma.user.findMany({
    where: { username: { contains: name } },
  });
  const contacts = await prisma.contact.findMany({
    where: { name: { contains: name } },
  });

  res.json([...users, ...contacts]);
};
