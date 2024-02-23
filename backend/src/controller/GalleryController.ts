import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entity/User";
import { hashFilename, uploadFile, getPresignedUrl } from "../S3/S3Controller"
import { error } from "console";
require("dotenv").config();

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

export const uploadBeforeAndAfterImage = async (req: Request, res: Response) => {
  const beforeImage = req.files[0]
  const afterImage = req.files[1]
  const hashedBeforeImage = hashFilename(beforeImage.originalname);
  const hashedAfterImage = hashFilename(afterImage.originalname);

  await uploadFile(beforeImage, hashedBeforeImage);
  await uploadFile(afterImage, hashedAfterImage);

  const beforePresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, hashedBeforeImage);
  const afterPresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, hashedAfterImage);

  await AppDataSource.manager.insert("GalleryItem", {date: Date.now(), before: beforePresignedUrl, after: afterPresignedUrl})
  .then(() => res.json({message: "Successfully uploaded images."}))
  .catch((error: Error) => res.json({error: error.message}))
};

