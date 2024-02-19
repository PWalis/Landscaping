import { Request, Response } from "express";
import { validatePassword } from "./AuthenticateController";
import { AppDataSource } from "../data-source";
import { createAccessToken } from "./AccessTokenController";
import { Admin } from "../entity/Admin";

export const login = async (req: Request, res: Response) => {
  const admin: any = await AppDataSource.manager
    .find("admin", { where: { username: req.body.username } })
    .then((admin: any) => {
      if (
        admin &&
        validatePassword(req.body.password, admin[0].salt, admin[0].hashedPassword)
      ) {
        const accessToken = createAccessToken(admin[0]);
        res.json({ message: "Login successful", accessToken: accessToken });
      } else {
        res.json({ message: "Login failed Admin not found"});
      }
    })
    .catch((error: any) => {
      console.log("Error during login", error);
      res.json({ message: "Login failed" });
    });
};
