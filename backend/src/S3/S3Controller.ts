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

const hashFilename = (filename, username) => {
  const saltedFilename = filename + username;
  const hash = crypto.SHA(saltedFilename);
  return hash.toString();
};

const resizeImage = (buffer, width, height) => {
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

const uploadFile = async (file, username) => {
  console.log("uploading file");
  const filename = hashFilename(file.originalname, username);
  const resizedImage = await resizeImage(file.buffer, 200, 200);
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filename,
    Body: resizedImage,
    ContentType: file.mimetype,
  };
  const returnedUpload = await s3Client
    .send(new PutObjectCommand(params))
    .then((data) => {
      console.log("Successfully uploaded file.");
    })
    .catch((error) => {
      console.log("Error uploading file.", error);
    });
};

//get presigned url
const getPresignedUrl = async (bucketName, fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  const command = new GetObjectCommand(params);
  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 604800,
  });
  console.log(signedUrl);
  return signedUrl;
};

// delete file from s3
const deleteFile = async (bucketName, fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  await s3Client
    .send(new DeleteObjectCommand(params))
    .then((data) => {
      console.log("Successfully deleted file.", data);
      return data;
    })
    .catch((error) => {
      console.log("Error deleting file.", error);
    });
};
