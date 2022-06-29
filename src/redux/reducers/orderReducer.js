import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function orderReducer(state = initialState.orders, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_CART:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
