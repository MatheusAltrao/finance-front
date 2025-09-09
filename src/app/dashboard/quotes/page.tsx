import { getStocksAction } from '@/actions/stocks/get-stocks-action'
import { QuotesCurrencyCard } from './components/quotes-currency-card'
import { QuotesStockCard } from './components/quotes-stock-card'

export default async function QuotesPage() {
  const { currencies, stocks } = await getStocksAction()

  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <div>
          <h1 className="text-lg font-semibold">Moedas</h1>
          <p className="text-sm text-muted-foreground">
            Veja as principais cotações de moedas atualizadas em tempo real.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {currencies.map((currency) => (
            <QuotesCurrencyCard key={currency.name} data={currency} />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <h1 className="text-lg font-semibold">Ações</h1>
          <p className="text-sm text-muted-foreground">
            Veja as principais cotações de ações atualizadas em tempo real.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {stocks.map((stock) => (
            <QuotesStockCard key={stock.name} data={stock} />
          ))}
        </div>
      </section>
    </div>
  )
}
