import { formatCurrencies } from "@/helpers/format-quotes";
import { QuoteProps } from "@/types/quotes";
import { QuotesCurrencyCard } from "./components/quotes-currency-card";

async function fetchStocks() {
  try {
    const response = await fetch(`https://api.hgbrasil.com/finance`, {
      next: { revalidate: 60 }, // 1 minuto
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function QuotesPage() {
  const quotes: QuoteProps = await fetchStocks();
  const stocks = quotes.results.stocks;

  console.log(stocks);

  const formattedCurrencies = formatCurrencies(quotes.results.currencies);

  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <div>
          <h1 className="text-lg font-semibold">Moedas</h1>
          <p className="text-sm">
            Veja as principais cotações de moedas atualizadas em tempo real.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {formattedCurrencies.map((currency) => (
            <QuotesCurrencyCard key={currency.name} data={currency} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-semibold">Ações</h2>
        <div className="grid grid-cols-2 gap-4"></div>
      </section>
    </div>
  );
}
