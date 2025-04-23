'use server'

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

export async function uploadFile(base64: string, fileName: string, articleId: string) {
  const key = `articles/${articleId}/${fileName}`
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: Buffer.from(base64.split(",")[1], "base64")
    });

    return await s3Client.send(command).then(() => {
      const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
      return url
    }).catch((error) => {
      console.error("Error uploading file:", error);
      throw error;
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}