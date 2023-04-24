
import { AnyAction } from 'redux'
import { setCartItems,setCartOpen } from './cart-action'
import { CartItem } from './cart-type';

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE:CartState={
  isCartOpen:false,
  cartItems:[],
}




export const cartReducer=(state=CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
  
  // switch(type){
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //   return{
  //      ...state,
  //      cartItems:payload,
  //   }
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //   return{
  //      ...state,
  //      isCartOpen:payload
  //   }
  //   default:
  //    return state;
  // }


}