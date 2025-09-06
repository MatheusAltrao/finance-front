export interface QuoteProps {
  results: ResultsProps;
}

export interface ResultsProps {
  currencies: CurrenciesProps;
  stocks: {
    name: string;
    location: string;
    points: number;
    variation: number;
  };
  available_sources: string[];
  taxes: any[];
}

export interface CurrenciesProps {
  source: string;
  USD: CurrencyDataProps;
  EUR: CurrencyDataProps;
  GBP: CurrencyDataProps;
  ARS: CurrencyDataProps;
  CAD: CurrencyDataProps;
  AUD: CurrencyDataProps;
  JPY: CurrencyDataProps;
  CNY: CurrencyDataProps;
  BTC: CurrencyDataProps;
}

export interface CurrencyDataProps {
  name: string;
  buy: number;
  sell: number;
  variation: number;
}
