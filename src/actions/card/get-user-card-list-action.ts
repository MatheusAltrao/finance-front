'use server'

import type { CardListResponseProps } from '@/types/card'
import { getTokenAction } from '../session/get-token-action'

export async function getUserCardListAction() {
  try {
    const token = await getTokenAction()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()
    return data as CardListResponseProps[]
  } catch (error) {
    console.log(error)
    return []
  }
}
