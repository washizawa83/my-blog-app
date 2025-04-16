'use server'

import { signIn } from "./auth"

export const authenticate = async (prevState: boolean | undefined, formData: FormData) => {
  try {
    await signIn('credentials', formData)
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return false
    }
    throw error
  }
}