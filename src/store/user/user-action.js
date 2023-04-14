import { createAction } from "../../utils/reducer-utils/createAction"
import { USER_ACTION_TYPE } from "./user-type"

export const setCurrentUser=(user)=>{
   return createAction(USER_ACTION_TYPE.SET_CURRENT,user);
   }

  export const  checkUserSession=()=>createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);
  
  export const googleSignInStart=()=>createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);

  export const emailSignInStart=(email,password)=>createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,{email,password});

  export const signInSuccess=(user)=>createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS,user);

  export const signInFailed=(user)=>createAction(USER_ACTION_TYPE.SIGN_IN_FAILED,user);

  export const signUpStart=(email,password,displayname)=>createAction(USER_ACTION_TYPE.SIGN_UP_START,{email,password,displayname});

  export const  signUpSuccess =({user,additionalDetails})=>createAction(USER_ACTION_TYPE.SIGN_UP_SUCCES,{user,additionalDetails});

  export const signUpFailed=(error)=>createAction(USER_ACTION_TYPE.SIGN_UP_FAILED,error);

  export const  singOutStart=()=>createAction(USER_ACTION_TYPE.SIGN_OUT_START);
  export const signOutSucces=()=>createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCES);
  export const signOutFailed=(error)=>createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED,error);