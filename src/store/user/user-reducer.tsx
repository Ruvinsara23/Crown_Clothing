//import { USER_ACTION_TYPE } from "./user-type";
import { AnyAction } from "redux";
import { userData } from "../../utils/fairebase";

import {signInFailed,signInSuccess,signOutFailed,signOutSucces,signUpFailed } from "./user-action";


export type UserState ={
  readonly currentUser:userData|null,
  readonly isLoading:boolean,
  readonly error:Error|null
  
}

const INITIAL_STATE:UserState={
    currentUser:null,
    isLoading:false,
    error:null,
}



export const userReducer=(state=INITIAL_STATE,action:AnyAction)=>{
    if(signInSuccess.match(action)){
        return{...state, currentUser:action.payload }
    }

    if(signOutSucces.match(action)){
        return{...state, currentUser:null }
    }
    if(signInFailed.match(action)|| signUpFailed.match(action)||signOutFailed.match(action)){
       return{...state,error:action.payload};
    }
     return state;
    };

    //switch(type){
    //     case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
    //     return{
    //         ...state,
    //         currentUser:payload

    //     } 
    //    case USER_ACTION_TYPE.SIGN_OUT_SUCCES:
    //     return{...state,currentUser:null}
    //    case USER_ACTION_TYPE.SIGN_OUT_FAILED:
    //    case USER_ACTION_TYPE.SIGN_UP_FAILED:
    //    case USER_ACTION_TYPE.SIGN_IN_FAILED:
    //     return{
    //         ...state,
    //         error:payload
    //     } 
    //     default:
    //        return state;

    // }


