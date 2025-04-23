'use client'

import { uploadFile } from '@/app/service/aws/aws-client'
import { useRef } from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'

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
  const inputFileRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    inputFileRef?.current?.click()
  }

  return (
    <div>
      <input
        ref={inputFileRef}
        className="hidden"
        type="file"
        onChange={(e) => handleUpload(e, articleId, insertImageNotation)}
      />
      <button className="bg-pink-500" onClick={onClick}>
        <IconContext.Provider value={{ size: '22px' }}>
          <IoImageOutline />
        </IconContext.Provider>
      </button>
    </div>
  )
}
