import { getUserBankAction } from '@/actions/bank/get-user-bank-action'
import { getUserCardListAction } from '@/actions/card/get-user-card-list-action'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { formatCurrency } from '@/helpers/format-currency'
import { PlusCircle } from 'lucide-react'
import AddCreditCard from './components/add-credit-card'
import AddExpanse from './components/add-expanse'

export default async function CardsPage() {
  const cards = await getUserCardListAction()
  const banks = await getUserBankAction()

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="flex h-[260px] cursor-pointer flex-col items-center justify-center bg-accent transition-colors hover:bg-primary hover:text-white">
            <CardContent className="flex flex-col items-center justify-center gap-3">
              <PlusCircle size={64} strokeWidth={0.8} />
              Novo cartão de crédito
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Cartão de crédito</DialogTitle>
            <DialogDescription>
              Aqui você pode adicionar um novo cartão de crédito para gerenciar suas despesas.
            </DialogDescription>
          </DialogHeader>

          <AddCreditCard banks={banks} />
        </DialogContent>
      </Dialog>

      {cards.map((card) => (
        <Card
          key={card.id}
          className="relative flex h-[260px] flex-col justify-between bg-gradient-to-br from-primary/80 to-accent p-6 text-white shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Cartão #{card.id}</span>
              <span className="rounded bg-white/20 px-2 py-1 text-xs">{formatCurrency(Number(card.limit))}</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="text-sm">
                  Dia de fechamento: <span className="font-medium">{card.dayClosing}</span>
                </div>
                <div className="text-sm">
                  Dia de vencimento: <span className="font-medium">{card.dayMaturity}</span>
                </div>
              </div>
              <div>
                <span className="text-sm opacity-80">{new Date(card.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div>
            <AddExpanse cardId={card.id} />
          </div>
        </Card>
      ))}
    </div>
  )
}
