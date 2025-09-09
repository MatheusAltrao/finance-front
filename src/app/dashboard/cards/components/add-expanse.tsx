'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon, Plus } from 'lucide-react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { z } from 'zod'
import { addCreditCardExpenseAction } from '@/actions/card/add-credit-card-expense-action'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Loading from '@/components/ui/loading'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { formatDate } from '@/helpers/format-date'
import { AddExpanseSchema, type IAddExpanseSchema } from '@/schemas/expense'

interface AddExpanseProps {
  cardId: number
}

export default function AddExpanse({ cardId }: AddExpanseProps) {
  const [isPending, startTransition] = useTransition()
  const form = useForm<IAddExpanseSchema>({
    resolver: zodResolver(AddExpanseSchema),
    defaultValues: {
      totalAmount: '',
      date: new Date().toISOString(),
      description: '',
      installments: '1',
    },
  })

  async function onSubmit(values: z.infer<typeof AddExpanseSchema>) {
    startTransition(async () => {
      try {
        const formData = {
          cardId: cardId,
          totalAmount: Number(parseFloat(values.totalAmount.replace(',', '.'))),
          date: formatDate(values.date),
          installments: Number(parseInt(values.installments, 10)),
          description: values.description,
        }

        await addCreditCardExpenseAction(formData)

        toast.success('Despesa adicionada com sucesso!')
      } catch (error) {
        console.log('Erro ao adicionar despesa:', error)
        toast.error('Erro ao adicionar despesa. Tente novamente.')
      }
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
          <Plus /> Adicionar despesa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar despesa</DialogTitle>
          <DialogDescription>Preencha o formulário e adicione uma nova despesa.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="totalAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input placeholder="Adicionar valor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="installments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parcelas</FormLabel>
                    <FormControl>
                      <Input placeholder="Parcelado em quantas vezes" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            data-empty={!field.value}
                            className="w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                          >
                            <CalendarIcon />
                            {field.value ? (
                              format(new Date(field.value), 'PPP', {
                                locale: ptBR,
                              })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent side="top" className="w-auto overflow-hidden p-0">
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(date) => field.onChange(date?.toISOString())}
                            required
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              {isPending ? <Loading /> : <Plus />} Adicionar despesa
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
