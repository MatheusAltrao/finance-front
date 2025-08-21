import { cookies } from "next/headers";

const SESSION_NAME = "session-finance";
export const generateExpires = () => new Date(Date.now() + 60 * 60 * 60); // 1 hora

export const createSession = async (payload: string) => {
  const expires = generateExpires();
  cookies().set(SESSION_NAME, payload, { expires, httpOnly: true });
};

export const getSession = async () => {
  const session = cookies().get(SESSION_NAME)?.value;

  if (!session) return null;

  const token = session;

  return token;
};

export const updateSession = async () => {
  const session = await getSession();
  if (!session) return null;

  const expires = generateExpires();

  const jwt = { session, expires };

  const updatedSession = {
    name: SESSION_NAME,
    value: jwt,
    expires,
    httpOnly: true,
  };

  return updatedSession;
};

export const deleteSession = async () => {
  cookies().set(SESSION_NAME, "", { expires: new Date(0) });
};
