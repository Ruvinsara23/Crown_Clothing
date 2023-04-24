import React from "react";
import './category-item.scss';
import { Route } from "react-router-dom";
import Category from "../../routers/category/category-compornent";

const CategoryItem=({category})=>{
   const {imageUrl, title} = category; 
   return (
    <div className='derectry-item-container' onClick={<Route path=":category" element={<Category />} />}>
    <div className='background-image '
     style={{
     backgroundImage:`url(${imageUrl})`
    }}/>
     <div className='derectry-item-body-container'>
      <h2>{title}</h2>
      <p>shop now</p>
     </div>
   </div>
   
   );
 
}

export default CategoryItem;