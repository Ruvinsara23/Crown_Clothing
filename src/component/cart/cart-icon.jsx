import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg'
import { useContext } from 'react' 
import { CartContext } from '../../context/cart-context'

import React from 'react'

import "./cart-icon.styles.scss"





const Cart = () => {
    const {isCartOpen,setCartOpen,cartItems}=useContext(CartContext)
    const cartToggle=()=>{
        setCartOpen( !isCartOpen)
   }
   console.log("this is counter",cartItems)

   
   
     
  return (
    <div className='cart-icon-container' onClick={cartToggle}>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>
      {cartItems.reduce((cartTotal,cartCount)=>{return cartTotal
        + cartCount.quantity

      },0)}
      </span>
    </div>
  )
}

export default Cart
