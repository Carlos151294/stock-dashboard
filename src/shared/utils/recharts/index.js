import { getUTCTime, getUTCFormatted, MXformatter } from "../date";

export const handleXAxisTickFormat = (value) => {
  return getUTCTime(value);
};

export const handleYAxisTickFormat = (value) => {
  return MXformatter(value);
};

export const handleTooltipLabelFormat = (value) => {
  return getUTCFormatted(value);
};

export const handleTooltipFormat = (value) => {
  return [MXformatter(value, 2), 'Price'];
};