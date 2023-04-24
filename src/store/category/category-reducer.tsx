import { CATEGORY_TYPE,Category} from './category-type';
import { CategoryAction,fetchCategoriesStart,fetchCategoriesSuccess,fetchCategoriesFail} from './category-action';
import { error } from 'console';
import { AnyAction } from 'redux';

export type CatergoriesState={
    readonly categories:Category[];
    readonly isLoading:Boolean;
    readonly error: Error |null
}


const CATEGORIES_INITIAL_STATE: CatergoriesState ={
    categories:[],
    isLoading:false,
    error:null,
}


export const categoryReduser=(
    state=CATEGORIES_INITIAL_STATE,
    action={}as AnyAction):CatergoriesState=>{
        if (fetchCategoriesStart.match(action)){
            return {...state,isLoading:true}
        }
        if (fetchCategoriesSuccess.match(action)){
            return{...state,categories:action.payload,isLoading:false}
        }
        if(fetchCategoriesFail.match(action)){
            return{...state,error:action.payload,isLoading:false}
        }
        return state


//  switch(action.type){
//     case CATEGORY_TYPE.FETCH_CATEGORIES_START:
//         return{
//             ...state,
//             isLoading:true
//         }
//     case CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS:
//         return{
//             ...state,
//             categories:action.payload,
//             isLoading:false,
//         }
//     case CATEGORY_TYPE.FETCH_CATEGORIES_FAILED:
//             return{
//                 ...state,
//                 error:action.payload,
//                 isLoading:false
//             }
//     default:
//          return state;
//  }

}