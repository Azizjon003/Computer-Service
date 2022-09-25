import { Actiontype } from "../contants/action-type";

const initialState = {
  product: [],
};
const countInitialState = { count: 0 };

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

export const countProductReducer = (
  state = countInitialState,
  { type, payload }
) => {
  switch (type) {
    case Actiontype.INCREMENT_PRODUCTS:
      return { count: state.count + 1 };
    case Actiontype.DECREMENT_PRODUCTS:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
//{ ...state, value: state.value - payload }
