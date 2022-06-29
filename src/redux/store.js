import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const reducers = combineReducers({ cart: cartReducer, orders: orderReducer });
const store = createStore(reducers);

export default store;
