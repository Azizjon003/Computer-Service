export const remToPx = (value) => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value) => {
  return `${value / 16}rem`;
};

export function responsiveFontSizes({ sm, md, lg }) {
  return {};
}
