export type ConvertIntoCurrencyOptions = {
  showValueOnZero?: boolean;
  showCurrencySign?: boolean;
};
export type IConvertIntoCurrency = (
  value: string,
  options?: ConvertIntoCurrencyOptions,
) => string | undefined;

export const convertIntoCurrencyValue: IConvertIntoCurrency = (
  value,
  options?,
) => {
  const normalize = Number(formatIntoNumericFormat(value));

  if (!normalize && !options?.showValueOnZero) {
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

  return !options?.showCurrencySign ? withoutCurrency : withCurrency;
};

export function formatIntoNumericFormat(value: string) {
  const findDotCommanAndSignRegex = /[.,;(R$)\s]/g;
  return value.replace(findDotCommanAndSignRegex, '');
}
