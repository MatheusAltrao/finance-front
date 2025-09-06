import type { CurrenciesProps, CurrencyDataProps, StocksProps } from '@/types/quotes'

export const formatCurrencies = (currenciesObj: CurrenciesProps) => {
  const currencies = Object.fromEntries(
    Object.entries(currenciesObj).filter(([key, value]) => key !== 'source' && typeof value === 'object'),
  )
  return Object.keys(currencies).map((key) => {
    return currencies[key as keyof typeof currencies] as CurrencyDataProps
  })
}

export const formatStocks = (stocksObj: StocksProps) => {
  return Object.keys(stocksObj).map((key) => {
    return stocksObj[key as keyof typeof stocksObj] as any
  })
}
