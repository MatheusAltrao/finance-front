/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
'use client'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import Loading from '@/components/ui/loading'
import type { BankProps } from '@/types/banks'

interface SelectBankListProps {
  banks: BankProps[]
  token: string
}

export default function SelectBankList({ banks, token }: SelectBankListProps) {
  const router = useRouter()

  const [selectedBank, setSelectedBank] = useState<BankProps | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleBindBank = async () => {
    if (!selectedBank) {
      toast.error('Selecione um banco para continuar.')
      return
    }

    startTransition(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/bind`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account_id: selectedBank?.id,
          }),
        })

        console.log(response)
        toast.success('Banco vinculado com sucesso!')
        setSelectedBank(null)
        router.refresh()
      } catch (error) {
        console.log(error)
        toast.error('Erro ao vincular banco. Tente novamente.')
      }
    })
  }

  return (
    <div className="space-y-4">
      <div className="h-[350px] space-y-2 overflow-y-auto">
        {banks.map((bank) => (
          <button
            onClick={() => setSelectedBank(bank)}
            key={bank.id}
            className={`flex w-full items-center gap-2 rounded-md border p-2 transition-colors hover:bg-accent ${
              selectedBank?.id === bank.id ? 'border-primary bg-accent' : 'border-transparent'
            }`}
          >
            <Image className="rounded-full" src={bank.logoUrl} alt="" width={40} height={40} />
            {bank.name}
          </button>
        ))}
      </div>

      <Button disabled={!selectedBank || isPending} onClick={handleBindBank} className="w-full">
        {isPending ? <Loading /> : <Check />} Confirmar Escolha
      </Button>
    </div>
  )
}
