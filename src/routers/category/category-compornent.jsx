import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect } from 'react'
import ProductCard from '../../component/product-card-compornrnt/product-card'
import './categoy-style.scss'
import {selectCategoriesMap} from '../../store/category/category-selector'
import { useSelector } from 'react-redux'
import { selectCategoriesLoding } from '../../store/category/category-selector'
import Spinner from '../../component/spinner/spiner'

const Category = () => {
  const {category}=useParams()
  const categories= useSelector(selectCategoriesMap)
  const isLoading=useSelector(selectCategoriesLoding)
  const [products,setProducts]=useState([])

  useEffect(()=>{
    setProducts(categories[category])
  },[category,categories])

  return(
    <Fragment>
    <h2 className='title'>{category.toUpperCase()}</h2>
    {
      isLoading ?<Spinner />: <div className='category-container'>
   
      {
          products&&products.map((product)=><ProductCard key={product.id} product={product} />)
      }
      
      
      </div>
      
      
    }
    </Fragment>
   
    
    )

}



export default Category
