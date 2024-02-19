const express = require("express");
import { getUsers, uploadBeforeAndAfterImage } from "../controller/GalleryController";

export const GalleryRouter = express.Router();

GalleryRouter.get("/getUsers", getUsers)
GalleryRouter.post("/uploadBeforeAndAfterImage", uploadBeforeAndAfterImage)
