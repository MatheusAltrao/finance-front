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
  FormSignInSchema,
  FormSignInSchemaProps,
} from "@/schemas/auth/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormSignIn() {
  const form = useForm<FormSignInSchemaProps>({
    resolver: zodResolver(FormSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormSignInSchemaProps) {
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Entrar
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
          <Link
            href="/auth/reset-password"
            className="underline underline-offset-4"
          >
            Esqueceu a senha ?
          </Link>
        </div>
      </div>
    </Form>
  );
}
