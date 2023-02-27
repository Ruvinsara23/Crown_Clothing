import { compose,legacy_createStore as createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(action.type){
        return next(action)
        
    }
    console.log('type',action)
    console.log('payload',action.payload)
    console.log('currentState',store.getStore())
    next(action)
    console.log('next state',store.getStore())

}


const middleware=[loggerMiddleware]
const composedEnhance=compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, undefined, composedEnhance)