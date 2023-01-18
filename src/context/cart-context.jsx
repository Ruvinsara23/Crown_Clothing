import { createContext,useReducer} from "react";



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


const INITIAL_STATE={
  isCartOpen:false,
 cartItems:[],
 cartTotal:0

}




const cartReducer=(state,action)=>{
  const {type,payload}=action
  switch(type){
    case'SET_CART_ITEM':
    return{
       ...state,
       ...payload
    }
    case'IS_CART_OPEN':
    return{
       ...state,
       isCartOpen:payload
    }
    default:
      throw new Error(`${type} IN is cart open`)
  }


}



export const CartProvider=({children})=>
{const [{cartItems,isCartOpen,cartTotal},dispatch]=useReducer(cartReducer,INITIAL_STATE)


  //const [isCartOpen,setCartOpen]=useState(false)
 //const [cartItems,setCartItems]=useState([])
 //const [cartTotal,setCartTotal]=useState(0)

// const setCartItems=(cartOpen)=>{
//   dispatch({type:OPEN_CART.IS_CART_OPEN,payload:cartOpen})
// } 

const updateCartItemReduser=(newCartItems)=>{
  const newCartTotal=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
  dispatch({
    type:'SET_CART_ITEM', payload:{cartItems:newCartItems,cartTotal: newCartTotal
      
    }
  })
}

const setCartOpen=(bool)=>{
  dispatch({type:'IS_CART_OPEN',payload:bool})


}



 const addItemToCart=(productToAdd)=>{
  const newCartItems=addCartItem(cartItems,productToAdd)
  updateCartItemReduser(newCartItems)

 }
 const  removeItemFromCart=(cartItemToRemove)=>{
  const newCartItems=removeCartItem(cartItems,cartItemToRemove)
  updateCartItemReduser(newCartItems)
 }

 const  deleteItemFromCart=(deleteToCaratItem)=>{
  const newCartItems=(deleteCartItem(cartItems,deleteToCaratItem))
  updateCartItemReduser(newCartItems)
}




// useEffect(()=>{
//   const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0
//   )
//   setCartTotal( newCartTotal)
// },[cartItems])
 
 



    const value={isCartOpen,setCartOpen,addItemToCart,cartItems,removeItemFromCart,deleteItemFromCart,cartTotal}
return <CartContext.Provider value={value}>
{children}
</CartContext.Provider>
}