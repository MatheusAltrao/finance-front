import { updateSession } from "@/helpers/session";
import { NextRequest, NextResponse } from "next/server";

export default async function Middleware(request: NextRequest) {
  const updatedSession = await updateSession();

  if (!updatedSession) return;

  const res = NextResponse.next();
  if (updatedSession.value !== null) {
    res.cookies.set(updatedSession.name, updatedSession.value, {
      expires: updatedSession.expires,
      httpOnly: updatedSession.httpOnly,
    });
  }

  return res;
}
