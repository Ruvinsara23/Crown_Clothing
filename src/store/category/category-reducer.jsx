import { CATEGORY_TYPE} from './category-type'

const CATEGORIES_INITIAL_STATE={
    categories:[],
    isLoading:false,
    error:null,
}


export const categoryReduser=(state=CATEGORIES_INITIAL_STATE,action={})=>{
 const{type,payload}=action

 switch(type){
    case CATEGORY_TYPE.FETCH_CATEGORIES_START:
        return{
            ...state,
            isLoading:true
        }
    case CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS:
        return{
            ...state,
            categories:payload,
            isLoading:false,
        }
    case CATEGORY_TYPE.FETCH_CATEGORIES_FAILED:
            return{
                ...state,
                error:payload,
                isLoading:false
            }
    default:
         return state;
 }

}