"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/helpers/format-date";
import { AddExpanseSchema, IAddExpanseSchema } from "@/schemas/expense";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function AddExpanse() {
  const form = useForm<IAddExpanseSchema>({
    resolver: zodResolver(AddExpanseSchema),
    defaultValues: {
      totalAmount: "",
      date: new Date().toISOString(),
      description: "",
      installments: "1",
    },
  });

  async function onSubmit(values: z.infer<typeof AddExpanseSchema>) {
    try {
      const formData = {
        totalAmount: Number(parseFloat(values.totalAmount.replace(",", "."))),
        date: formatDate(values.date),
        description: values.description,
        installments: Number(parseInt(values.installments, 10)),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/card/expense`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log(data);

      toast.success("Despesa adicionada com sucesso!");
    } catch (error) {
      console.log("Erro ao adicionar despesa:", error);
      toast.error("Erro ao adicionar despesa. Tente novamente.");
    }
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
          <DialogDescription>
            Preencha o formulário e adicione uma nova despesa.
          </DialogDescription>
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
                      <Input
                        placeholder="Parcelado em quantas vezes"
                        {...field}
                      />
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
                              format(new Date(field.value), "PPP", {
                                locale: ptBR,
                              })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          side="top"
                          className="w-auto overflow-hidden p-0"
                        >
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) =>
                              field.onChange(date?.toISOString())
                            }
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
              <Plus /> Adicionar despesa
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
