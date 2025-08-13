import { z } from "zod";

export const FormSignInSchema = z.object({
  email: z.string().trim().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Senha inválida" })
    .max(50, { message: "Senha inválida" }),
});

export type FormSignInSchemaProps = z.infer<typeof FormSignInSchema>;
