import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg'
//import { useContext } from 'react' 
import { useDispatch ,useSelector} from 'react-redux';
import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart-seletor';
import { setCartOpen } from '../../store/cart/cart-action';

//import { CartContext } from '../../context/cart-context'

import React from 'react'

import "./cart-icon.styles.scss"





const Cart = () => {
  //  const {isCartOpen,setCartOpen,cartItems}=useContext(CartContext)
const  cartCount =useSelector(selectCartCount)
  const dispatch=useDispatch()
  const isCartOpen=useSelector(selectIsCartOpen);
    const cartToggle=()=>{
        dispatch(setCartOpen( !isCartOpen))
   }
   
   
     
  return (
    <div className='cart-icon-container' onClick={cartToggle}>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>
    {cartCount}
      </span>
    </div>
  )
}

// // {cartItems.reduce((cartTotal,cartCount)=>{return cartTotal
//+ cartCount.quantity

//},0)}

export default Cart
