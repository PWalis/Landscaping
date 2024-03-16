import { Router } from "express";
import {uploadBeforeAndAfterImage, getGallery, deleteFromGallery, deleteGalleryItem } from "../controller/GalleryController";
const upload = require("multer")();

export const GalleryRouter = Router();

GalleryRouter.get("/getGallery", getGallery)
GalleryRouter.delete("/deleteFromGallery", deleteFromGallery)
GalleryRouter.post("/uploadBeforeAndAfterImage", upload.array("files"), uploadBeforeAndAfterImage)
GalleryRouter.delete("/deleteGalleryItem/", deleteGalleryItem)
