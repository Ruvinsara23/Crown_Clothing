import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/categori-context'
import { useContext,useState,useEffect } from 'react'
import ProductCard from '../../component/product-card-compornrnt/product-card'
import './categoy-style.scss'

const Category = () => {
  const {category}=useParams()
  const {categories}=useContext(CategoriesContext)
  const [products,setProducts]=useState([])

  useEffect(()=>{
    setProducts(categories[category])
  },[category,categories])

  return(
    <Fragment>
    <h2 className='title'>{category}</h2>
    <div className='category-container'>
   
    {
        products&&products.map((product)=><ProductCard key={product.id} product={product} />)
    }
    
    
    </div>
    
    
    </Fragment>
   
    
    )

}



export default Category
