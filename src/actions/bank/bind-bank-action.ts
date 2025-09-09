'use server'

import { revalidatePath } from 'next/cache'
import { getTokenAction } from '../session/get-token-action'

export async function bindBankAction(accountId: number) {
  if (!accountId) {
    throw new Error('Account ID is required')
  }

  try {
    const token = await getTokenAction()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/bind`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account_id: accountId,
      }),
    })

    await response.json()

    revalidatePath('/dashboard/banks')
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao vincular banco. Tente novamente.')
  }
}
