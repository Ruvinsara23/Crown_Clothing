import { CART_ACTION_TYPES,CartItem } from "./cart-type";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer-utils/createAction";
import { CategoryItem } from "../category/category-type";


const addCartItem=(cartItems:CartItem[],productToAdd:CategoryItem ):CartItem[]=>{
  
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

  const removeCartItem=(cartItems:CartItem[],cartItemToRemove:CartItem):CartItem[]=>{
      const exisitingCartItem =cartItems.find(
          (cartItem)=>cartItem.id===cartItemToRemove.id
        
        )
        if(exisitingCartItem && exisitingCartItem.quantity===1){
          return cartItems.filter((cartItem)=>cartItem.id!==cartItemToRemove.id )
       }
       return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id ?{...cartItem,quantity:cartItem.quantity -1 }:
       cartItem)

  }

const deleteCartItem=(cartItems:CartItem[],deleteToCaratItem:CartItem):CartItem[]=>{
return cartItems.filter((cartItem)=>cartItem.id!==deleteToCaratItem.id )
}   


export type SetIsCartOpen=ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>

export type SetCartItems=ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>

export const setCartItems= withMatcher((CartItems:CartItem[]):SetCartItems=>createAction(CART_ACTION_TYPES.SET_CART_ITEMS,CartItems))

export const setCartOpen=withMatcher((bool:boolean):SetIsCartOpen=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))




   export const addItemToCart=(cartItems:CartItem[],productToAdd:CategoryItem)=>{
      const newCartItems=addCartItem(cartItems,productToAdd)
      return setCartItems(newCartItems)
     };
     export const  removeItemFromCart=(cartItems:CartItem[],cartItemToRemove:CartItem)=>{
      const newCartItems=removeCartItem(cartItems,cartItemToRemove)
      return setCartItems(newCartItems)
     }
    
     export const  deleteItemFromCart=(cartItems:CartItem[],deleteToCaratItem:CartItem)=>{
      const newCartItems=(deleteCartItem(cartItems,deleteToCaratItem))
     return setCartItems(newCartItems)
    }
    
  
  

  

