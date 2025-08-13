import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[500px] p-2 pt-[15vh]">
      {children}
    </div>
  );
}

export function formFooter(
  formType: "register" | "sign-in" | "reset-password",
) {
  return (
    <div className="mt-4">
      {formType === "sign-in" && (
        <div className="flex flex-col items-center gap-1">
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/auth/register"
              className="underline underline-offset-4"
            >
              Criar uma conta
            </Link>
          </div>

          <div className="text-center text-sm">
            Esqueceu a senha ?{" "}
            <Link
              href="/auth/reset-password"
              className="underline underline-offset-4"
            >
              redefinir senha
            </Link>
          </div>
        </div>
      )}

      {formType === "register" && (
        <div className="flex flex-col items-center gap-1">
          <div className="text-center text-sm">
            Já possui uma conta?{" "}
            <Link href="/auth/sign-in" className="underline underline-offset-4">
              Entrar
            </Link>
          </div>

          <div className="text-center text-sm">
            Esqueceu a senha ?{" "}
            <Link
              href="/auth/reset-password"
              className="underline underline-offset-4"
            >
              redefinir senha
            </Link>
          </div>
        </div>
      )}

      {formType === "reset-password" && (
        <div className="flex flex-col items-center gap-1">
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/auth/register"
              className="underline underline-offset-4"
            >
              Criar uma conta
            </Link>
          </div>

          <div className="text-center text-sm">
            Já possui uma conta?{" "}
            <Link href="/auth/sign-in" className="underline underline-offset-4">
              Entrar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
