import { compose,legacy_createStore as createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore,persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

/*const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(action.type){
        return next(action)
        
    }
    console.log('type',action)
    console.log('payload',action.payload)
    console.log('currentState',store.getStore())
    next(action)
    console.log('next state',store.getStore())

}

const loggerMiddleware = store => next => action => {
    if (typeof action === 'object' && action !== null && 'type' in action) {
      console.log('type', action.type);
      console.log('payload', action.payload);
      console.log('currentState', store.getState());
    }
    const result = next(action);
    if (typeof action === 'object' && action !== null && 'type' in action) {
      console.log('next state', store.getState());
    }
    return result;
  };
  
 */





const persistConfig={
    key:'root',
    storage,
    whiteList:['cart']
}
const presistedReducer=persistReducer(persistConfig,rootReducer);
//const middleware=[thunk,process.env.NODE_ENV!=='production' && logger].filter(Boolean);

//const composedEnhancer=(process.env.NODE_ENV!=='production' && window && window.__REDUX_DEVTOOLS_EXTENSION__) || compose

//const composedEnhance=composedEnhancer(applyMiddleware(...middleware));

//const middleware=[thunk,process.env.NODE_ENV!=='production' && logger].filter(Boolean);

//const composedEnhancer=(process.env.NODE_ENV!=='production' && window && window.__REDUX_DEVTOOLS_EXTENSION__) || compose

//const composedEnhance=composedEnhancer(applyMiddleware(...middleware));
//export const store = createStore(presistedReducer, undefined, composedEnhance);
export const store = createStore(presistedReducer, undefined,applyMiddleware(thunk)) ;

export const persistor=persistStore(store)
