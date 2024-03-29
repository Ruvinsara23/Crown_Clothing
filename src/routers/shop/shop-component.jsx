import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview-compornent"
import Category from "../category/category-compornent"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchCategoriesStart } from "../../store/category/category-action"

const Shop = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch(fetchCategoriesStart())
     },[]);

  return (  
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  
  
  )
}

export default Shop

