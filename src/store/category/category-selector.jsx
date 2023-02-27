export const selectCategoriesMap=(stae)=>stae.categorey.categories
.reduce((acc ,category)=>{
const {title,items}= category
        acc[title.toLowerCase()]=items;
        return acc
    },{})

