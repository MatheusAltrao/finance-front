"use server";

import { deleteSession } from "@/helpers/session";
import { redirect } from "next/navigation";

export async function signOutFormAction() {
  await deleteSession();
  redirect("/auth/sign-in");
}
