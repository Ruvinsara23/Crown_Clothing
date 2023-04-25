import { createAction,withMatcher,Action,ActionWithPayload } from "../../utils/reducer-utils/createAction"
import { USER_ACTION_TYPE } from "./user-type"

import { userData,additinalInformation } from "../../utils/fairebase";

export type CheckUserSession=Action<USER_ACTION_TYPE.CHECK_USER_SESSION>
export type GoogleSignInStart=Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>
export type EmailSignInStart=ActionWithPayload<USER_ACTION_TYPE.EMAIL_SIGN_IN_START,{email:string,password:string}>
export type  SetCurrentUser=ActionWithPayload<USER_ACTION_TYPE.SET_CURRENT,userData>
export type SignInSuccess=ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_SUCCESS,userData>
export type SignInFailed=ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_FAILED,userData>
export type SignUpStart=ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_START,{email:string,password:string,displayname:string}>
export type  SignUpSuccess=ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_SUCCES,{user:userData,additionalDetails:additinalInformation}>
 export type SignUpFailed=ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_FAILED,Error>
export type  SingOutStart=Action<USER_ACTION_TYPE.SIGN_OUT_START>
 export type SignOutSucces=Action<USER_ACTION_TYPE.SIGN_OUT_SUCCES>
export type SignOutFailed=ActionWithPayload<USER_ACTION_TYPE.SIGN_OUT_FAILED,Error>

export const setCurrentUser=withMatcher((user:userData)=>{
   return createAction(USER_ACTION_TYPE.SET_CURRENT,user);
   })

  export const  checkUserSession=withMatcher(()=>createAction(USER_ACTION_TYPE.CHECK_USER_SESSION));
  
  export const googleSignInStart=withMatcher(():GoogleSignInStart=>createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START));

  export const emailSignInStart= withMatcher((email:string,password:string)=>createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,{email,password}));

  export const signInSuccess=withMatcher((user:userData):SignInSuccess=>createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS,user));

  export const signInFailed=withMatcher((user:userData):SignInFailed=>createAction(USER_ACTION_TYPE.SIGN_IN_FAILED,user));

  export const signUpStart=withMatcher((email:string,password:string,displayname:string):SignUpStart=>createAction(USER_ACTION_TYPE.SIGN_UP_START,{email,password,displayname}));

  export const  signUpSuccess =withMatcher((user:userData,additionalDetails:additinalInformation):SignUpSuccess=>createAction(USER_ACTION_TYPE.SIGN_UP_SUCCES,{user,additionalDetails}));

  export const signUpFailed=withMatcher((error:Error):SignUpFailed=>createAction(USER_ACTION_TYPE.SIGN_UP_FAILED,error));
  export const  singOutStart=withMatcher(():SingOutStart=>createAction(USER_ACTION_TYPE.SIGN_OUT_START));
  export const signOutSucces=withMatcher(():SignOutSucces=>createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCES));
  export const signOutFailed=withMatcher((error:Error):SignOutFailed=>createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED,error));