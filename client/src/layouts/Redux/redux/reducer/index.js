import { combineReducers } from "redux";
import {
  countProductReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  count: countProductReducer,
});

export default reducers;
