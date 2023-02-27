import { CART_ACTION_TYPES } from "./cart-type";
import { createAction } from "../../utils/reducer-utils/createAction";

const addCartItem=(cartItems,productToAdd)=>{
  
  const exisitingCartItem =cartItems.find(
    (cartItem)=>cartItem.id===productToAdd.id
  
  )
   if(exisitingCartItem){
      return cartItems.map((cartItem)=>
      cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1 }:
      cartItem)
   }

   return [...cartItems,{...productToAdd,quantity:1}]
   
  
  }

  const removeCartItem=(cartItems,cartItemToRemove)=>{
      const exisitingCartItem =cartItems.find(
          (cartItem)=>cartItem.id===cartItemToRemove.id
        
        )
        if(exisitingCartItem.quantity===1){
          return cartItems.filter((cartItem)=>cartItem.id!==cartItemToRemove.id )
       }
       return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id ?{...cartItem,quantity:cartItem.quantity -1 }:
       cartItem)

  }

const deleteCartItem=(cartItems,deleteToCaratItem)=>{
return cartItems.filter((cartItem)=>cartItem.id!==deleteToCaratItem.id )
}   



export const setCartOpen=(bool)=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)




   export const addItemToCart=(cartItems,productToAdd)=>{
      const newCartItems=addCartItem(cartItems,productToAdd)
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
     };
     export const  removeItemFromCart=(cartItems,cartItemToRemove)=>{
      const newCartItems=removeCartItem(cartItems,cartItemToRemove)
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
     }
    
     export const  deleteItemFromCart=(cartItems,deleteToCaratItem)=>{
      const newCartItems=(deleteCartItem(cartItems,deleteToCaratItem))
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
    }
    
  
  

  

