import { TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { StocksProps } from '@/types/quotes'

interface QuotesStockCardProps {
  data: StocksProps
}

export function QuotesStockCard({ data }: QuotesStockCardProps) {
  const isPositive = data.variation > 0

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="w-full truncate">
            <h3 className="truncate font-medium text-foreground">{data.name}</h3>
            <p className="text-muted-foreground text-sm">{data.location}</p>
          </div>
          <TrendingUp size={20} className={`${isPositive ? 'text-green-500' : 'text-red-500'}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>({data.variation}%)</span>
        </div>
      </CardContent>
    </Card>
  )
}
