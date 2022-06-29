import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.productId === action.payload.product.productId
      );
      if (addedItem) {
        if (
          addedItem.quantity > 0 &&
          addedItem.quantity < action.payload.product.stock
        ) {
          var newState = state.map((cartItem) => {
            if (
              cartItem.product.productId === action.payload.product.productId
            ) {
              return Object.assign({}, addedItem, {
                quantity: addedItem.quantity + 1,
              });
            }
            return cartItem;
          });
          return newState;
        } else {
          return state;
        }
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.productId !== action.payload.productId
      );
      return newState2;
    case actionTypes.RESET_CART:
      state = [];
      return state;
    case actionTypes.INC_QUANTITY:
      var getItem = state.find(
        (c) => c.product.productId === action.payload.product.productId
      );
      if (getItem) {
        if (
          getItem.quantity >= 1 &&
          getItem.quantity < action.payload.product.stock
        ) {
          var newState = state.map((cartItem) => {
            if (
              cartItem.product.productId === action.payload.product.productId
            ) {
              return Object.assign({}, getItem, {
                quantity: getItem.quantity + 1,
              });
            }
            return cartItem;
          });
          return newState;
        } else {
          return state;
        }
      }
    case actionTypes.DEC_QUANTITY:
      var getItem = state.find(
        (c) => c.product.productId === action.payload.product.productId
      );
      if (getItem) {
        if (
          getItem.quantity > 1 &&
          getItem.quantity <= action.payload.product.stock
        ) {
          var newState = state.map((cartItem) => {
            if (
              cartItem.product.productId === action.payload.product.productId
            ) {
              return Object.assign({}, getItem, {
                quantity: getItem.quantity - 1,
              });
            }
            return cartItem;
          });
          return newState;
        } else {
          return state;
        }
      }
    default:
      return state;
  }
}
