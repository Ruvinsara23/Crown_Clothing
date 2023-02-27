import { USER_ACTION_TYPE } from "./user-type";

const INITIAL_STATE={
    currentUser:null
}



export const userReducer=(state=INITIAL_STATE,action)=>{
    console.log(action)
    const {type,payload} =action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT:
        return{
            ...state,
            currentUser:payload

        }  
        default:
           return state;

    }
}

