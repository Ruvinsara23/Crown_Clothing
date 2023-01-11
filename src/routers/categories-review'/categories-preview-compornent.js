import React, { Fragment } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/categori-context'

import CategoryPreview from '../../component/category-preview/category-preview'


const CategoriesPreview= () => {
    const {categories}=useContext(CategoriesContext )
  return (  
    <Fragment>
    <div className> 
      {Object.keys(categories).map((title)=>{
        const products =categories[title]
        return <CategoryPreview key={title} title={title} products={products}/>
      }
       
        )

   }

    </div>
  
    </Fragment>
  
  )
}

export default  CategoriesPreview
