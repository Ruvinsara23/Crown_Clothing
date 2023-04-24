import { createSelector } from "@reduxjs/toolkit";
import { CategoryMap } from "./category-type";
import { CatergoriesState } from "./category-reducer";

const selectCatergoryReducer=(state: { categorey: CatergoriesState; }): CatergoriesState =>state.categorey

export const selectCategories=createSelector(
    [selectCatergoryReducer],(catergoriesSlice)=>catergoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories], 
    (categories): CategoryMap =>
      categories.reduce((acc, category) => {
        const {title,items}= category 
        acc[title.toLowerCase()]=items;
        return acc
    },{} as CategoryMap))
  

export const selectCategoriesLoding=createSelector(
    [selectCatergoryReducer],
    (catergoriesSlice)=>catergoriesSlice.isLoading
)

