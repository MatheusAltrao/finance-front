import { z } from "zod";

export const FormResetPasswordSchema = z.object({
  email: z.string().trim().email({ message: "E-mail inválido" }),
});

export type FormResetPasswordSchemaProps = z.infer<
  typeof FormResetPasswordSchema
>;
