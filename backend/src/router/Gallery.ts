const express = require("express");
import { getUsers, deleteUsers } from "../controller/GalleryController";

export const GalleryRouter = express.Router();

GalleryRouter.get("/getUsers", getUsers)

// GalleryRouter.delete("/deleteUsers", deleteUsers)