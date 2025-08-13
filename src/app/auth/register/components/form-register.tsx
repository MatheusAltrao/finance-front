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
  FormRegisterSchema,
  FormRegisterSchemaProps,
} from "@/schemas/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormRegister() {
  const form = useForm<FormRegisterSchemaProps>({
    resolver: zodResolver(FormRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  function onSubmit(values: FormRegisterSchemaProps) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Matheus" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          Criar conta
        </Button>
      </form>
      <div className="flex items-center flex-col gap-1 mt-4">
        <div className=" text-center text-sm">
          Já possui uma conta?{" "}
          <Link href="/auth/sign-in" className="underline underline-offset-4">
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
    </Form>
  );
}
