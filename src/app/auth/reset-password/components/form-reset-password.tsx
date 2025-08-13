"use client";

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
import {
  FormResetPasswordSchema,
  FormResetPasswordSchemaProps,
} from "@/schemas/auth/reset-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
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
      {formFooter("reset-password")}
    </Form>
  );
}
