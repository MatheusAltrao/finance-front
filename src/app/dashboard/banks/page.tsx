import { Plus, PlusCircle } from 'lucide-react'
import Image from 'next/image'
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
import { getSession } from '@/helpers/session'
import type { BankProps, UserBankProps } from '@/types/banks'

async function getBankList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts`)
    const data = await response.json()

    return data as BankProps[]
  } catch (error) {
    console.log(error)
    return []
  }
}

async function getUserBank(token: string) {
  if (!token) {
    throw new Error('Token is required')
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    return data as UserBankProps[]
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function BanksPage() {
  const session = await getSession()
  const bankList = await getBankList()
  const userBanks = await getUserBank(session?.value || '')

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

          <div>
            <ul className="h-[420px] space-y-2 overflow-y-auto">
              {bankList.map((bank) => (
                <li
                  key={bank.id}
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 transition-colors hover:bg-accent"
                >
                  <Image className="rounded-full" src={bank.logoUrl} alt="" width={40} height={40} />
                  {bank.name}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {userBanks.map((bank, index) => (
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
