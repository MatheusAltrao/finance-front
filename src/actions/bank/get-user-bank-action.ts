"use server";

import type { UserBankProps } from "@/types/banks";
import { getTokenAction } from "../session/get-token-action";

export async function getUserBankAction() {
  const token = await getTokenAction();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/accounts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await response.json();

    return data as UserBankProps[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
