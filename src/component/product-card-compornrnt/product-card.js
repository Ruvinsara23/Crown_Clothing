import React from 'react'
import './product-card.styles.scss'
import Button from '../button/button-component'
//import { useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart-action'
import { selectCartItems } from '../../store/cart/cart-seletor'
//import { CartContext } from '../../context/cart-context'
//

const ProductCard = ({product}) => {
    const {name,imageUrl,price}=product;
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems)
    const addProductToCart=()=>dispatch(addItemToCart(cartItems,product));

  return (
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='footer'>
     <span className='name'>{name}</span>
     <span className='price'>${price}</span>
    </div>
    <Button type='inverted' onClick={addProductToCart}>Add To Cart</Button> 
    </div>
  )
}

export default ProductCard
