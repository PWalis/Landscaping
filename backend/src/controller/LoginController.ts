import { Request, Response } from "express";
import { validatePassword } from "./AuthenticateController";
import { AppDataSource } from "../data-source";
import { createAccessToken } from "./AccessTokenController";
import { Admin } from "../entity/Admin";

export const login = async (req: Request, res: Response) => {
    const admin: any = await AppDataSource.manager.find("admin", { where: { username: req.body.username } });
    if (admin && validatePassword(req.body.password, admin.salt, admin.hashedPassword)) {
        const accessToken = createAccessToken(admin);
        res.json({ message: "Login successful", accessToken: accessToken});
    } else {
        res.json({ message: "Login failed" });
    }
};