require("dotenv").config()

const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");


const REGION = process.env.AWS_REGION;
const ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const s3Client = new S3Client({region: REGION, credentials: {accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY}});


