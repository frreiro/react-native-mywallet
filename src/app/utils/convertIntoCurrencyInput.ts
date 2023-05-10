export function convertIntoCurrencyValue(value: string) {
  const normalize = Number(formatIntoNumericFormat(value));

  if (!normalize) {
    return undefined;
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    useGrouping: true,
  }).format(normalize / 100);
}

export function formatIntoNumericFormat(value: string) {
  const findDotCommanAndSignRegex = /[.,;(R$)\s]/g;
  return value.replace(findDotCommanAndSignRegex, '');
}
