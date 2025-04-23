'use client'

import { uploadFile } from '@/app/service/aws/aws-client'

type Props = {
  articleId: string
  insertImageNotation: (imageUrl: string) => void
}

function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

async function handleUpload(
  event: React.ChangeEvent<HTMLInputElement>,
  articleId: string,
  insertImageNotation: (imageUrl: string) => void,
) {
  try {
    const file = event.target.files?.[0]
    if (file) {
      const base64 = await convertFileToBase64(file)
      const uploadUrl = await uploadFile(base64, file.name, articleId)
      insertImageNotation(uploadUrl)
    }
  } catch (error) {
    console.error('Error uploading file:', error)
  }
}

export const UploadImage = ({ articleId, insertImageNotation }: Props) => {
  return (
    <input
      type="file"
      onChange={(e) => handleUpload(e, articleId, insertImageNotation)}
    />
  )
}
