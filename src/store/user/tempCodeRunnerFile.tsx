
    switch(type){
        case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
        return{
            ...state,
            currentUser:payload

        } 
       case USER_ACTION_TYPE.SIGN_OUT_SUCCES:
        return{...state,currentUser:null}
       case USER_ACTION_TYPE.SIGN_OUT_FAILED:
       case USER_ACTION_TYPE.SIGN_UP_FAILED:
       case USER_ACTION_TYPE.SIGN_IN_FAILED:
        return{
            ...state,
            error:payload
        } 
        default:
           return state;

    }