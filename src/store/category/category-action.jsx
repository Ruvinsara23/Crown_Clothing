import { createAction } from "../../utils/reducer-utils/createAction";
import { CATEGORY_TYPE } from "./category-type"
import { getCategoriesAndDocument } from "../../utils/fairebase";

export const fetchCategoriesStart=()=> createAction(CATEGORY_TYPE.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess=(categoriesArray)=> createAction(CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray);
export const fetchCategoriesFail=(error)=> createAction(CATEGORY_TYPE.FETCH_CATEGORIES_FAILED,error);


export const fetchCategoriesAsync = () => async (dispatch) => {
     dispatch(fetchCategoriesStart());
     try {
       const categoriesArray = await getCategoriesAndDocument('categories');
       dispatch(fetchCategoriesSuccess(categoriesArray));
     } catch (error) {
       dispatch(fetchCategoriesFail(error));
     }
   };


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
