 import { createContext } from "react";
import {useEffect } from "react";
 import { createUserDocumentFromAuth, onAuthStateChangedLisner} from "../utils/fairebase";
import { createAction } from "../utils/reducer-utils/createAction";
 import { useReducer } from "react";


export const UserContext=createContext({
    currentUser:null,
  setCurrentUser:()=> null,
    
 })

export const  USER_ACTION_TYPE={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReduser=(state,action)=>{
    console.log(action)
    const {type,payload} =action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
        return{
            ...state,
            currentUser:payload

        }  
        default:
            throw new Error(` ${type} is user reduser`)   
    }
}

const INITIAL_STATE={
    currentUser:null
}

 export const UserProvider =({children})=>{
    const [{currentUser},dispatch]=useReducer(userReduser,INITIAL_STATE) //currentuser = to state vallue

   console.log(currentUser)

   const setCurrentUser=(user)=>{
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user))
   }
    const value={currentUser,setCurrentUser}







useEffect(()=>{
  const unsbscribe=  onAuthStateChangedLisner((user)=>{
   if (user) {
    createUserDocumentFromAuth(user)
   }
   setCurrentUser(user)
    

})
return unsbscribe
},[]
)

   return <UserContext.Provider value={value}>{children   }</UserContext.Provider>
 }