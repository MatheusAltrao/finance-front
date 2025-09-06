import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/helpers/format-currency";
import { CurrencyDataProps } from "@/types/quotes";
import { TrendingUp } from "lucide-react";

interface CurrencyCardProps {
  data: CurrencyDataProps;
}

export function QuotesCurrencyCard({ data }: CurrencyCardProps) {
  const isPositive = data.variation > 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-foreground">{data.name}</h3>
          </div>
          <TrendingUp
            size={20}
            className={`${isPositive ? "text-green-500" : "text-red-500"}`}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span>{formatCurrency(data.buy)}</span>
          <span className={`${isPositive ? "text-green-500" : "text-red-500"}`}>
            ({data.variation}%)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
