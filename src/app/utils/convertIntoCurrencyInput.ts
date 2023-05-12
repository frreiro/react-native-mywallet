export function convertIntoCurrencyValue(
  value: string,
  noCurrency: boolean = false,
) {
  const normalize = Number(formatIntoNumericFormat(value));

  if (!normalize) {
    return undefined;
  }

  const withCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    useGrouping: true,
  }).format(normalize / 100);

  const withoutCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    useGrouping: true,
  })
    .format(normalize / 100)
    .replace(/[(R$)\s]/g, '')
    .trim();

  return noCurrency ? withoutCurrency : withCurrency;
}

export function formatIntoNumericFormat(value: string) {
  const findDotCommanAndSignRegex = /[.,;(R$)\s]/g;
  return value.replace(findDotCommanAndSignRegex, '');
}
