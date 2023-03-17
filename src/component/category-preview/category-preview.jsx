import React from 'react'
import ProductCard from '../product-card-compornrnt/product-card'
import './category-preview.styles.scss'
import { Link } from 'react-router-dom'


const CategoryPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>

    <h1>
      <Link className='title' to={title}>{title.toUpperCase()}</Link>
    </h1>
    <div className='preview'>
        {
          Object.values(products).filter((_,idx)=>idx<4).map((product)=><ProductCard key={product.id} product={product} />)
        }
    </div>

    </div>
    
  )
}

export default CategoryPreview
