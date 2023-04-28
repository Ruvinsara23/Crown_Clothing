import { Middleware } from "redux";
import { Rootstate } from "../store";

export const loggerMiddleware: Middleware<{},Rootstate>= (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
  };
  