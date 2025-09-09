"use server";

import { getSession } from "@/helpers/session";

export async function getTokenAction() {
  const sesssion = await getSession();

  if (!sesssion) {
    throw new Error("User is not authenticated");
  }

  const token = sesssion.value;

  return token;
}
