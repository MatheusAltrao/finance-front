import z from 'zod'

export const AddCreditCardSchema = z.object({
  accountId: z.string().min(1, { message: 'O banco é obrigatório' }),
  dayClosing: z.string().refine(
    (val) => {
      const num = Number(val)
      return num >= 1 && num <= 31
    },
    { message: 'O dia de fechamento deve ser entre 1 e 31' },
  ),
  dayMaturity: z.string().refine(
    (val) => {
      const num = Number(val)
      return num >= 1 && num <= 31
    },
    { message: 'O dia de vencimento deve ser entre 1 e 31' },
  ),
  limit: z.string().min(1, { message: 'O limite é obrigatório' }),
})

export type IAddCreditCardSchema = z.infer<typeof AddCreditCardSchema>
