import React from 'react'
import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'


const CheckoutItems = ({cartItem}) => {
    const {name,imageUrl,quantity,price}=cartItem
    const { deleteItemFromCart,addItemToCart, removeItemFromCart }=useContext(CartContext)
    const deleteHandler=()=>deleteItemFromCart(cartItem)
    const addItemHandler=()=>addItemToCart(cartItem)
    const removeHandler=()=> removeItemFromCart (cartItem)

  return (
    <div className='checkout-item-container'>
          <div className='image-container'>
          <img src={imageUrl} alt={`${name}`}/>
          </div>
          <span className='name'> {name}</span> 
          <span className='quantity'>
          <div  className='arrow'  onClick={removeHandler}>-</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}>+</div>
          </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={deleteHandler}>&#10060;</div>
    </div>
  )
}

export default CheckoutItems

