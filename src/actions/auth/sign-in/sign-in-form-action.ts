"use server";

import { createSession } from "@/helpers/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function signInFormAction(token: string) {
  if (!token) {
    throw new Error("Token is required");
  }

  const jwt = token;

  await createSession(jwt);

  revalidatePath("/");
  redirect("/");
}
