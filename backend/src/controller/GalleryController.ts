import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entity/User";
import { GalleryItem } from "../entity/GalleryItem";
import { hashFilename, uploadFile, getPresignedUrl } from "../S3/S3Controller"
import { error } from "console";
import { DataSource } from "typeorm";
require("dotenv").config();

interface MulterRequest extends Request {
  files: any;
}

export const getGallery = async (req: Request, res: Response) => {
  await AppDataSource.manager.find(GalleryItem)
  .then(async (galleryItems: any) => {
    for (let galleryItem of galleryItems) {
      const date: number = Number(galleryItem.date)
      const expiry: number = galleryItem.expiry
      if (date + expiry < Date.now()) {
        console.log("Signed url is expired. Generating new signed url.")
        const beforePresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, galleryItem.beforeName, expiry);
        const afterPresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, galleryItem.afterName, expiry);
        galleryItem.before = beforePresignedUrl;
        galleryItem.after = afterPresignedUrl;
        await AppDataSource.manager.update(GalleryItem, {id: galleryItem.id}, {before: beforePresignedUrl, after: afterPresignedUrl})
      }
    }
    res.json(galleryItems);
  })
  .catch((error: Error) => {
    res.send(error.message);
  });
};

export const deleteFromGallery = async (req: Request, res: Response) => {
  await AppDataSource.manager.delete(GalleryItem, {})
  .then(() => res.json({message: "Gallery deleted"}))
  .catch((error: Error) => res.json({error: error.message})) 
}

export const deleteGalleryItem = async (req: Request, res: Response) => {
  const id = req.body.id;
  await AppDataSource.manager.delete(GalleryItem, {id: id})
  .then(() => res.json({message: "Gallery item deleted"}))
  .catch((error: Error) => res.json({error: error.message}))
}

export const uploadBeforeAndAfterImage = async (req: MulterRequest, res: Response) => {
  const expiry = 60 * 60 * 24 * 5; // 5 days
  const beforeImage = req?.files[0]
  const afterImage = req?.files[1]
  const hashedBeforeImage = hashFilename(beforeImage.originalname);
  const hashedAfterImage = hashFilename(afterImage.originalname);

  await uploadFile(beforeImage, hashedBeforeImage);
  await uploadFile(afterImage, hashedAfterImage);

  const beforePresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, hashedBeforeImage, expiry);
  const afterPresignedUrl = await getPresignedUrl(process.env.AWS_BUCKET_NAME, hashedAfterImage, expiry);

  await AppDataSource.manager.insert("GalleryItem", {date: Date.now(), expiry:expiry, beforeName:hashedBeforeImage, before: beforePresignedUrl, afterName:hashedAfterImage, after: afterPresignedUrl})
  .then(() => res.json({message: "Successfully uploaded images."}))
  .catch((error: Error) => res.json({error: error.message}))
};

//re-oder gallery items
// export const reorderGalleryItems = async (req: Request, res: Response) => {
//   const galleryItems = req.body;
//   for (let galleryItem of galleryItems) {
//     await AppDataSource.manager.update(GalleryItem, {id: galleryItem.id}, {order: galleryItem.order})
//     .then(() => res.json({message: "Gallery items reordered"}))
//     .catch((error: Error) => res.json({error: error.message}))
//   }
// }


