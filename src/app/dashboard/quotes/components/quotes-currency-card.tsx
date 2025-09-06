import { TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { formatCurrency } from '@/helpers/format-currency'
import type { CurrencyDataProps } from '@/types/quotes'

interface CurrencyCardProps {
  data: CurrencyDataProps
}

export function QuotesCurrencyCard({ data }: CurrencyCardProps) {
  const isPositive = data.variation > 0

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="truncate font-medium text-foreground">{data.name}</h3>
          </div>
          <TrendingUp size={20} className={`${isPositive ? 'text-green-500' : 'text-red-500'}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span>{formatCurrency(data.buy)}</span>
          <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>({data.variation}%)</span>
        </div>
      </CardContent>
    </Card>
  )
}
