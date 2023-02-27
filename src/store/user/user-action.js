import { createAction } from "../../utils/reducer-utils/createAction"
import { USER_ACTION_TYPE } from "./user-type"

export const setCurrentUser=(user)=>{
   return createAction(USER_ACTION_TYPE.SET_CURRENT,user)
   }