const {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
import * as crypto from "crypto-js";
import * as sharp from "sharp";
import { s3Client } from "./S3Connection";
require("dotenv").config();
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

export const hashFilename = (filename: string): string => {
  return crypto.SHA256(filename).toString();
};

const resizeImage = (buffer: Buffer, width: number, height: number): Promise<Buffer | void> => {
  const resizedImage = sharp(buffer)
    .resize(width, height)
    .toBuffer()
    .then((data) => {
      console.log("Successfully resized image.");
      return data;
    })
    .catch((err) => {
      console.log("Error resizing image.", err);
    });
  return resizedImage;
};

export const uploadFile = async (file: any, filename: string) => {
  console.log("uploading file");
  const resizedImage = await resizeImage(file.buffer, 600, 600);
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: resizedImage,
    ContentType: file.mimetype,
  };
  await s3Client
    .send(new PutObjectCommand(params))
    .then((data: any) => {
      console.log("Successfully uploaded file.");
    })
    .catch((error: any) => {
      console.log("Error uploading file.", error);
    });
};

//get presigned url
export const getPresignedUrl = async (bucketName: string, fileName: string) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  const command = new GetObjectCommand(params);
  const signedUrl = await getSignedUrl(s3Client, command);
  console.log("getPreSignedURL", signedUrl);
  return signedUrl;
};

// delete file from s3
export const deleteFile = async (bucketName: string, fileName: string) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  await s3Client
    .send(new DeleteObjectCommand(params))
    .then((data: any) => {
      console.log("Successfully deleted file.", data);
      return data;
    })
    .catch((error: any) => {
      console.log("Error deleting file.", error);
    });
};
