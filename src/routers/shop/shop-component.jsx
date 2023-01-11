import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-review'/categories-preview-compornent"
import Category from "../category/category-compornent"

const Shop = () => {

  return (  
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  
  
  )
}

export default Shop

