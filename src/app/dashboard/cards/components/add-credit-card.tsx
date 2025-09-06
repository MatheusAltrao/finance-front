'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Loading from '@/components/ui/loading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AddCreditCardSchema, type IAddCreditCardSchema } from '@/schemas/card'
import type { UserBankProps } from '@/types/banks'

interface AddCreditCardProps {
  banks: UserBankProps[]
  token: string | undefined
}

export default function AddCreditCard({ banks, token }: AddCreditCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<IAddCreditCardSchema>({
    resolver: zodResolver(AddCreditCardSchema),
    defaultValues: {
      accountId: '',
      dayClosing: '',
      dayMaturity: '',
      limit: '',
    },
  })

  async function onSubmit(values: IAddCreditCardSchema) {
    const formData = {
      accountId: Number(values.accountId),
      dayClosing: values.dayClosing,
      dayMaturity: values.dayMaturity,
      limit: Number(parseFloat(values.limit.replace(',', '.'))),
    }

    startTransition(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/card`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()
        console.log(data)
        toast.success('Cartão adicionado com sucesso!')
        router.refresh()
      } catch (error) {
        console.log('Erro ao adicionar cartão:', error)
        toast.error('Erro ao adicionar cartão. Tente novamente.')
      }
    })
  }

  return (
    <div className="space-y-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="accountId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecione sua conta bancária</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o seu banco" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {banks.map((bank) => (
                        <SelectItem key={bank.id} value={bank.id.toString()}>
                          {bank.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dayClosing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dia fechamento</FormLabel>
                  <FormControl>
                    <Input placeholder="Adicionar  fechamento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dayMaturity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dia vencimento</FormLabel>
                  <FormControl>
                    <Input placeholder="Adicionar vencimento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="limit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limite do cartão</FormLabel>
                  <FormControl>
                    <Input placeholder="Adicionar limite" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {isPending ? <Loading /> : <Plus />} Adicionar Cartão
          </Button>
        </form>
      </Form>
    </div>
  )
}
