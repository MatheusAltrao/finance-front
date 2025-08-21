"use client";

import signInFormAction from "@/actions/auth/sign-in/sign-in-form-action";
import formFooter from "@/components/auth/form-footer";
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
import Loading from "@/components/ui/loading";
import {
  FormSignInSchema,
  FormSignInSchemaProps,
} from "@/schemas/auth/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DoorOpen } from "lucide-react";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface SignInFormResponseProps {
  type: string;
  value: string;
  user: {
    id: number;
    email: string;
  };
}
export default function FormSignIn() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormSignInSchemaProps>({
    resolver: zodResolver(FormSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormSignInSchemaProps) {
    startTransition(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          },
        );

        const data = await response.json();
        const user = data as SignInFormResponseProps;
        const token = user.value;

        await signInFormAction(token);
        console.log("User logged in successfully:", data);
        toast.success("Seja bem vindo!");
        redirect("/");
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Erro ao fazer login. Tente novamente.");
      }
    });
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
        <Button disabled={isPending} className="w-full" type="submit">
          {isPending ? <Loading /> : <DoorOpen size={20} />} Entrar
        </Button>
      </form>
      {formFooter("sign-in")}
    </Form>
  );
}
