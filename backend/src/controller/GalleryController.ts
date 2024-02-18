import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entity/User";

export const getGallery = async () => {
  return await AppDataSource.manager.find("gallery");
};

export const addToGallery = async () => {
  return await AppDataSource.manager.create("gallery");
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await AppDataSource.manager.find(User);
  res.json(users);
};

export const deleteUsers = async (req: Request, res: Response) => {
  const users = await AppDataSource.manager.find(User);
  await AppDataSource.manager.remove(users);
  res.json({ Message: "All users deleted" });
};
