import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/category/category-selector'

import CategoryPreview from '../../component/category-preview/category-preview'


const CategoriesPreview= () => {
    const categoriesMap=useSelector(selectCategoriesMap)
   
  return (  
    <Fragment>
    <div>
      {Object.keys(categoriesMap).map((title)=>{
        const products=categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products}/>
      } 
        )
   }
   </div>
    </Fragment>
  
  )
}

export default  CategoriesPreview
