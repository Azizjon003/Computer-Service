import { Actiontype } from "../contants/action-type";

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontype.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case Actiontype.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
