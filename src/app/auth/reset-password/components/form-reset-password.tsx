"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FormResetPasswordSchema,
  FormResetPasswordSchemaProps,
} from "@/schemas/auth/reset-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormResetPassword() {
  const form = useForm<FormResetPasswordSchemaProps>({
    resolver: zodResolver(FormResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormResetPasswordSchemaProps) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="matheus@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Redefinir senha
        </Button>
      </form>
      <div className="flex items-center flex-col gap-1 mt-4">
        <div className=" text-center text-sm">
          Não tem uma conta?{" "}
          <Link href="/auth/register" className="underline underline-offset-4">
            Criar uma conta
          </Link>
        </div>

        <div className=" text-center text-sm">
          Já possui uma conta?{" "}
          <Link href="/auth/sign-in" className="underline underline-offset-4">
            Entrar
          </Link>
        </div>
      </div>
    </Form>
  );
}
