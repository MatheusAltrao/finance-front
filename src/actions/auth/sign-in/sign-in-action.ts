'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { encrypt } from '@/helpers/jwt'
import { createSession } from '@/helpers/session'
import type { SignInResponseProps } from '@/types/auth'

export async function signInAction(data: SignInResponseProps) {
  if (!data) {
    throw new Error('User not found')
  }

  console.log('Data received in signInAction:', data)

  const payload = {
    id: data.user.id,
    email: data.user.email,
    name: data.user.name,
    type: 'Bearer',
    value: data.value,
  }

  const jwt = await encrypt(payload)

  if (!jwt) {
    console.error('Failed to set cookie: JWT is null')
    return {
      isValid: false,
      errors: {},
    }
  }

  await createSession(jwt)

  revalidatePath('/')
  redirect('/dashboard')
}
