import { createContext ,useState,useEffect} from "react";

import { getCategoriesAndDocument } from "../utils/fairebase";


export const CategoriesContext=createContext({
    categories:[]
});


export const CategoriesProvider=({children})=>{
     const [categories,setcategories]=useState([])  


     useEffect(()=>{
        const getcategoriesMap = async()=>{
            const categoryMap=await getCategoriesAndDocument()
            console.log(categoryMap)
            setcategories(categoryMap)
        }
        getcategoriesMap()
     },[])

     const value={categories}

    return(
        <CategoriesContext.Provider value={value}> 
            {children}
        </CategoriesContext.Provider>
    )
}


