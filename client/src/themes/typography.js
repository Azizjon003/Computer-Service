import { pxToRem } from "../utils/getFontValue";
const FONT_PRIMARY = "Lato, sans-serif";

const typography = {
  font_family: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
  },
  h2: {},
};
