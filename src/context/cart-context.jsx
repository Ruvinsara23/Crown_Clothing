import { createContext,useState,useEffect} from "react";



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



export const CartContext=createContext({
    isCartOpen:false,
    setCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
   removeItemFromCart:()=>{},
   deleteItemFromCart:()=>{},
   cartTotal:0


})




export const CartProvider=({children})=>
{const [isCartOpen,setCartOpen]=useState(false)
 const [cartItems,setCartItems]=useState([])
 const [cartTotal,setCartTotal]=useState(0)


 const addItemToCart=(productToAdd)=>{setCartItems(addCartItem(cartItems,productToAdd ))

 }
 const  removeItemFromCart=(cartItemToRemove)=>{setCartItems(removeCartItem(cartItems,cartItemToRemove))
 }

 const  deleteItemFromCart=(deleteToCaratItem)=>{setCartItems(deleteCartItem(cartItems,deleteToCaratItem))}

useEffect(()=>{
  const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0
  )
  setCartTotal( newCartTotal)
},[cartItems])
 
 



    const value={isCartOpen,setCartOpen,addItemToCart,cartItems,removeItemFromCart,deleteItemFromCart,cartTotal}
return <CartContext.Provider value={value}>
{children}
</CartContext.Provider>
}