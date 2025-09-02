import z from "zod";

export const AddExpanseSchema = z.object({
  totalAmount: z
    .string()
    .min(1, "O valor deve ser maior que zero")
    .regex(/^\d+([.,]\d{1,2})?$/, "Formato inválido (ex: 100.50)"),
  date: z.string().min(1, "A data é obrigatória"),
  description: z.string().min(1, "A descrição é obrigatória"),
  installments: z
    .string()
    .min(1, "As parcelas são obrigatórias")
    .regex(/^\d+$/, "O valor deve conter apenas números"),
});

export type IAddExpanseSchema = z.infer<typeof AddExpanseSchema>;
