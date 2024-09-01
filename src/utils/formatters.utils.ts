const locale = navigator.language || 'pt-BR'

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat(locale).format(num)
}

export function formatDate(date: Date | string) {
  if (typeof date === 'string') date = new Date(date)
  return new Intl.DateTimeFormat(locale).format(date)
}

export const decimalToPercentage = (value: number) => {
  return `${Math.ceil(value * 10)}%`
}
