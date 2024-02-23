import { Router } from "express";
import { getUsers, uploadBeforeAndAfterImage } from "../controller/GalleryController";
const upload = require("multer")();

export const GalleryRouter = Router();

GalleryRouter.get("/getUsers", getUsers)
GalleryRouter.post("/uploadBeforeAndAfterImage", upload.array("files"), uploadBeforeAndAfterImage)
