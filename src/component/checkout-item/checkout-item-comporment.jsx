import React from 'react'
import './checkout-item.styles.scss'
import { useSelector,useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart-seletor'
import { addItemToCart,deleteItemFromCart,removeItemFromCart } from '../../store/cart/cart-action'
//import { useContext } from 'react'
//import { CartContext } from '../../context/cart-context'


const CheckoutItems = ({cartItem}) => {
    const {name,imageUrl,quantity,price}=cartItem
    const dispatch=useDispatch(selectCartItems);
    const cartItems=useSelector(selectCartItems)

    const deleteHandler=()=>dispatch(deleteItemFromCart(cartItems,cartItem))
    const addItemHandler=()=>dispatch(addItemToCart(cartItems,cartItem))
    const removeHandler=()=> dispatch(removeItemFromCart(cartItems,cartItem))


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
          <span className='price'>{price*quantity}</span>
          <div className='remove-button' onClick={deleteHandler}>&#10060;</div> 
    </div>
    
  )
}

export default CheckoutItems;

