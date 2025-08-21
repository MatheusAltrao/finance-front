import { z } from "zod";

export const FormRegisterSchema = z.object({
  email: z.string().trim().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Senha inválida" })
    .max(50, { message: "Senha inválida" }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome inválido" })
    .max(50, { message: "Nome inválido" }),
});

export type FormRegisterSchemaProps = z.infer<typeof FormRegisterSchema>;
