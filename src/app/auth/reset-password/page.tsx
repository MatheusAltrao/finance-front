import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redefinir senha</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para redefinir sua senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@exemplo.com"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Redefinir senha
              </Button>
            </div>
          </div>
          <div className="flex items-center flex-col gap-1 mt-4">
            <div className=" text-center text-sm">
              Já tem uma conta?{" "}
              <Link
                href="/auth/sign-in"
                className="underline underline-offset-4"
              >
                Entrar
              </Link>
            </div>

            <div className=" text-center text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/auth/register"
                className="underline underline-offset-4"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
