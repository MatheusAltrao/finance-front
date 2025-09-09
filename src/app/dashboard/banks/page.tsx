import { Plus, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import { getBankListAction } from '@/actions/bank/get-banks-list-action'
import { getUserBankAction } from '@/actions/bank/get-user-bank-action'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import SelectBankList from './components/select-bank-list'

export default async function BanksPage() {
  const bankList = await getBankListAction()
  const userBanks = await getUserBankAction()

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="flex h-[220px] cursor-pointer flex-col items-center justify-center bg-accent transition-colors hover:bg-primary hover:text-white">
            <CardContent className="flex flex-col items-center justify-center gap-3">
              <PlusCircle size={64} strokeWidth={0.8} />
              Nova conta bancária
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar uma conta bancária</DialogTitle>
            <DialogDescription>
              Aqui você pode adicionar uma nova conta bancária para gerenciar suas finanças.
            </DialogDescription>
          </DialogHeader>

          <SelectBankList banks={bankList} />
        </DialogContent>
      </Dialog>

      {userBanks.map((bank) => (
        <Card key={`${bank.id}`}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image className="rounded-full" src={bank.logo} alt={bank.name} width={32} height={32} />
              <span>{bank.name}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Saldo atual</span>
              <span className="text-muted-foreground">{bank.balance}</span>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              <Plus /> Adicionar despesa
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
