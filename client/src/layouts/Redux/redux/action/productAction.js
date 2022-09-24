import { Actiontype } from "../contants/action-type";

export const setProduct = (products) => {
  return {
    type: Actiontype.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: Actiontype.SELECTED_PRODUCT,
    payload: product,
  };
};
