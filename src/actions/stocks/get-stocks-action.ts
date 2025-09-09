"use server";

import { formatCurrencies, formatStocks } from "@/helpers/format-quotes";
import type { CurrencyDataProps, StocksProps } from "@/types/quotes";

export async function getStocksAction() {
  try {
    const response = await fetch(`https://api.hgbrasil.com/finance`, {
      next: { revalidate: 60 }, // 1 minuto
    });

    const data = await response.json();

    const currenciesData = data.results.currencies;
    const stocksData = data.results.stocks;

    const currencies: CurrencyDataProps[] = formatCurrencies(currenciesData);
    const stocks: StocksProps[] = formatStocks(stocksData);

    return {
      currencies,
      stocks,
    };
  } catch (error) {
    console.log(error);
    return {
      currencies: [],
      stocks: [],
    };
  }
}
