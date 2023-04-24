import { Action, ActionWithPayload,withMatcher} from "../../utils/reducer-utils/createAction";
import { CATEGORY_TYPE} from "./category-type";
import {Category} from "./category-type";
import { createAction } from "../../utils/reducer-utils/createAction";


export type FetchCategoriesStart =Action<CATEGORY_TYPE.FETCH_CATEGORIES_START>
export type FetchCategoriesSucces=ActionWithPayload<CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,Category[]>
export type FetchCategoriesFailed=ActionWithPayload<CATEGORY_TYPE.FETCH_CATEGORIES_FAILED,Error>

export type  CategoryAction= |FetchCategoriesStart|FetchCategoriesSucces|FetchCategoriesFailed //union



export const fetchCategoriesStart=withMatcher(
  ():FetchCategoriesStart=>
   createAction(CATEGORY_TYPE.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess=withMatcher(
  (categoriesArray:Category[]):FetchCategoriesSucces=> 
  createAction(CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray));

export const fetchCategoriesFail=withMatcher(
  (error:Error):FetchCategoriesFailed=> 
  createAction(CATEGORY_TYPE.FETCH_CATEGORIES_FAILED,error));

/*



export const fetchCategoriesAsync= () => {
   return (dispatch) => {
     dispatch(fetchCatergoriesStart());
     try {
       const categoriesArray = await getCategoriesAndDocument('categories');
       dispatch(fetchCatergoriesSuccsess(categoriesArray));
     } catch (error) {
       dispatch(fetchCatergoriesFail(error));
     }
   };
 };




export const fetchCategoriesStart = () => ({
  type: CATEGORY_TYPE.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFail = (error) => ({
  type: CATEGORY_TYPE.FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocument("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
}; */
