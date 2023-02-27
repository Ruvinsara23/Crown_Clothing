import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-review'/categories-preview-compornent"
import Category from "../category/category-compornent"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategoriesAndDocument } from "../../utils/fairebase"
import { setCategories} from "../../store/category/category-action"

const Shop = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        const getcategoriesMap = async()=>{
            const categoriesArray=await getCategoriesAndDocument('categories')
            console.log(categoriesArray)
            dispatch(setCategories(categoriesArray))
        }
        getcategoriesMap()
     },[dispatch])

  return (  
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  
  
  )
}

export default Shop

