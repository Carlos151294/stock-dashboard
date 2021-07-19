const formatter = (locale, currency, maximumFractionDigits) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
  });

export const MXformatter = (value, decimals = 0) =>
  formatter('es-MX', 'MXN', decimals).format(value);

export const getUTCTime = (date) => new Date(date).toUTCString().split(' ')[4];
export const getUTCFormatted = (date) => {
  const dateArray = new Date(date).toUTCString().split(' ');
  return `
    ${dateArray[4]},
    ${dateArray[1]}/${dateArray[2]}/${dateArray[3]}
  `;
};
