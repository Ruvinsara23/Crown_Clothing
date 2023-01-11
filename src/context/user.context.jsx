import { createContext } from "react";
import { useState,useEffect } from "react";
import { onAuthStateChangedLisner} from "../utils/fairebase";


export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=> null,
})


export const UserProvider =({children})=>{
    const   [currentUser,setCurrentUser]= useState(null)
    const value={currentUser,setCurrentUser}


useEffect(()=>{
  const unsbscribe=  onAuthStateChangedLisner((user)=>{setCurrentUser(user)


})
return unsbscribe
},[]
)



    return <UserContext.Provider value={value}>{children   }</UserContext.Provider>
}