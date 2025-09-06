'use server'

import { redirect } from 'next/navigation'
import { deleteSession } from '@/helpers/session'

export async function signOutFormAction() {
  await deleteSession()
  redirect('/auth/sign-in')
}
