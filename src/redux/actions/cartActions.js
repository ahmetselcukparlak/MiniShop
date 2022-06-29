import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartItem,
  };
}

export function removeFromCart(cartItem) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: cartItem,
  };
}

export function resetCart() {
  return {
    type: actionTypes.RESET_CART,
  };
}

export function incQuantity(cartItem) {
  return {
    type: actionTypes.INC_QUANTITY,
    payload: cartItem,
  };
}
export function decQuantity(cartItem) {
  return {
    type: actionTypes.DEC_QUANTITY,
    payload: cartItem,
  };
}
