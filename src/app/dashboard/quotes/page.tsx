import { formatCurrencies, formatStocks } from '@/helpers/format-quotes'
import type { QuoteProps, StocksProps } from '@/types/quotes'
import { QuotesCurrencyCard } from './components/quotes-currency-card'
import { QuotesStockCard } from './components/quotes-stock-card'

async function fetchStocks() {
  try {
    const response = await fetch(`https://api.hgbrasil.com/finance`, {
      next: { revalidate: 60 }, // 1 minuto
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function QuotesPage() {
  const quotes: QuoteProps = await fetchStocks()
  console.log(quotes)
  const currencies = quotes.results.currencies
  const stocks = quotes.results.stocks

  const formattedCurrencies = formatCurrencies(currencies)
  const formattedStocks: StocksProps[] = formatStocks(stocks)

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
          {formattedCurrencies.map((currency) => (
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
          {formattedStocks.map((stock) => (
            <QuotesStockCard key={stock.name} data={stock} />
          ))}
        </div>
      </section>
    </div>
  )
}
