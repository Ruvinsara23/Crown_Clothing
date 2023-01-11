import React from "react";
import './category-item.scss';

const CategoryItem=({category})=>{
   const {imageUrl, title} = category; 
   return (
    <div className='derectry-item-container'>
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