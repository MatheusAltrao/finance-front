'use server'

import { revalidatePath } from 'next/cache'
import { getTokenAction } from '../session/get-token-action'

interface AddCreditCardFormData {
  accountId: number
  dayClosing: string
  dayMaturity: string
  limit: number
}

export async function addCreditCardAction(formData: AddCreditCardFormData) {
  try {
    const token = await getTokenAction()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/card`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    console.log(data)

    revalidatePath('/dashboard/cards')
  } catch (error) {
    console.log('Erro ao adicionar cartão:', error)
  }
}
