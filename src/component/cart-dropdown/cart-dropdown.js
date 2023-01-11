import React from 'react'
import Button from '../button/button-component'
import './cart-dropdown.styles.scss'
import {useContext } from 'react'
import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'





const CartDropdown = () => {
  const {cartItems}=useContext(CartContext)
  const navigate= useNavigate()

  const goToCheckOut=()=>{
    navigate('/check-out')
  }


  return (

    <div className='cart-dropdown-container'>
    
     <div className='cart-items'>
     {cartItems.map((item)=><div>
      <CartItem key={item.id} cartItem={item}/>
      </div>
     ) }
    </div>
    <Button type='inverted' onClick={goToCheckOut}>CheckOut</Button> 
    </div>
  )
}

export default CartDropdown
