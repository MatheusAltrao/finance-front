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

export default function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@exemplo.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="********"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Criar conta
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
              <Link
                href="/auth/reset-password"
                className="underline underline-offset-4"
              >
                Esqueceu a senha ?
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
