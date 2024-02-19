import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export const authorize = (req: Request, res: Response) => {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        res.json({ message: "Authorized" });
    });
};