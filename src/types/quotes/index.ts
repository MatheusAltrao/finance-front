export interface QuoteProps {
  results: ResultsProps
}

export interface ResultsProps {
  currencies: CurrenciesProps
  stocks: StocksProps
  available_sources: string[]
  taxes: TaxProps[]
}

export interface CurrenciesProps {
  source: string
  USD: CurrencyDataProps
  EUR: CurrencyDataProps
  GBP: CurrencyDataProps
  ARS: CurrencyDataProps
  CAD: CurrencyDataProps
  AUD: CurrencyDataProps
  JPY: CurrencyDataProps
  CNY: CurrencyDataProps
  BTC: CurrencyDataProps
}

export interface CurrencyDataProps {
  name: string
  buy: number
  sell: number
  variation: number
}

export interface StocksProps {
  name: string
  location: string
  points: number
  variation: number
}

export interface TaxProps {
  name: string
  value: number
}
