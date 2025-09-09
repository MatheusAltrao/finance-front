'use server'

import { revalidatePath } from 'next/cache'
import { getTokenAction } from '../session/get-token-action'

interface addCreditCardExpenseAction {
  cardId: number
  totalAmount: number
  date: string
  installments: number
  description: string
}

export async function addCreditCardExpenseAction(formData: addCreditCardExpenseAction) {
  try {
    const token = await getTokenAction()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/card/expense`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    await response.json()

    revalidatePath('/dashboard/cards')
  } catch (error) {
    console.log('Erro ao adicionar despesa:', error)
    throw new Error('Erro ao adicionar despesa')
  }
}
