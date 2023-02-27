import { CATEGORY_TYPE} from './category-type'

const CATEGORIES_INITIAL_STATE={
    categories:[]
}


export const categoryReduser=(state=CATEGORIES_INITIAL_STATE,action={})=>{
 const{type,payload}=action

 switch(type){
    case CATEGORY_TYPE.SET_CATEGORIES:
        return{
            ...state,
            categories:payload
        }
    default:
         return state;
 }

}