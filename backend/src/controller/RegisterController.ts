import { hashAndSalt, generateSalt } from "./AuthenticateController";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const registerAdmin = async (req: Request, res: Response) => {
  if (req.body.secret !== process.env.ADMIN_SECRET) {
    const salt = generateSalt();
    const hashedPassword = hashAndSalt(req.body.password, salt);
    const admin = {
      username: req.body.username,
      salt: salt,
      hashedPassword: hashedPassword,
      role: "admin",
    };
    await AppDataSource.manager.insert("admin", admin);
    res.json({ message: "Admin registered" });
  } else {
    res.json({ message: "Failed ot register Admin" });
  }
};

export const deleteAllAdmins = async (req: Request, res: Response) => {
  await AppDataSource.manager.delete("admin", {});
  res.json({ message: "All Admins deleted" });
};
