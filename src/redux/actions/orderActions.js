import * as actionTypes from "./actionTypes";

export function successCart(order) {
  return {
    type: actionTypes.SUCCESS_CART,
    payload: order,
  };
}
