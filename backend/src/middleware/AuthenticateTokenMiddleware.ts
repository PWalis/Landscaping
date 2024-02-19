import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { GalleryItem } from "../entity/GalleryItem";

export const authenticateToken = (req: Request, res: Response, next: any) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, galleryItem: GalleryItem) => {
      if (err) return res.sendStatus(403);
      req.body.galleryItem = galleryItem;
      next();
    });
  };