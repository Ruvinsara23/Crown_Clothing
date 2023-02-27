import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { categoryReduser } from "./category/categery-reducer";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer=combineReducers({
   user:userReducer,
   categorey:categoryReduser,
   cart:cartReducer,
})