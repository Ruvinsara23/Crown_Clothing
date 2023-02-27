import React from 'react'
import Button from '../button/button-component'
import './cart-dropdown.styles.scss'
//import {useContext } from 'react'
import CartItem from '../cart-item/cart-item'
//import { CartContext } from '../../context/cart-context'\
import { selectCartItems } from '../../store/cart/cart-seletor'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'





const CartDropdown = () => {
  const cartItems=useSelector(selectCartItems);
  const navigate= useNavigate()

  const goToCheckOut=()=>{
    navigate('/check-out')
  }
  //<div className='cart-items'>{cartItems.length ?(cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>
  //)):(<div className='empty-message'>Your cart is empty</div>)}
 //</div> 

  return (

    <div className='cart-dropdown-container'>
    <div className='cart-items'>
  {cartItems && cartItems.length ? (
    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
  ) : (
    <div className='empty-message'>Your cart is empty</div>
  )}
</div>

    
    <Button type='inverted' onClick={goToCheckOut}>CheckOut</Button> 
    </div>
  )
}

export default CartDropdown
