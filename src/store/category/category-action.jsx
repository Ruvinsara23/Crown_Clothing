import { createAction } from "../../utils/reducer-utils/createAction"
import { CATEGORY_TYPE } from "./category-type"

export const setCategories=(categoriesArray)=>{
   return createAction(CATEGORY_TYPE.SET_CATEGORIES,categoriesArray)
   }