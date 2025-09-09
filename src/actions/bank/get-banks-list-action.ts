"use server";

import type { BankProps } from "@/types/banks";

export async function getBankListAction() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts`);
    const data = await response.json();

    return data as BankProps[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
