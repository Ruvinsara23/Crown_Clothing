import { createSelector } from "@reduxjs/toolkit";

const selectCatergoryReducer=(state)=>state.categorey

export const selectCategoriesMap=(stae)=>stae.categorey.categories
.reduce((acc ,category)=>{
const {title,items}= category
        acc[title.toLowerCase()]=items;
        return acc
    },{})

export const selectCategoriesLoding=createSelector(
    [selectCatergoryReducer],
    (catergoriesSlice)=>catergoriesSlice.isLoding
)