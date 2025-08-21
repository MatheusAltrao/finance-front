"use server";

import { encrypt } from "@/helpers/jwt";
import { createSession } from "@/helpers/session";
import { SignInResponseProps } from "@/types/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction(data: SignInResponseProps) {
  if (!data) {
    throw new Error("User not found");
  }

  const payload = {
    id: data.user.id,
    email: data.user.email,
    /*   name: data.user.name,  */
    type: "Bearer",
    value: data.value,
  };

  const jwt = await encrypt(payload);

  if (!jwt) {
    console.error("Failed to set cookie: JWT is null");
    return {
      isValid: false,
      errors: {},
    };
  }

  await createSession(jwt);

  revalidatePath("/");
  redirect("/");
}
