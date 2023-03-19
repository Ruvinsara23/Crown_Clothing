import { call, put, all, takeLatest } from 'redux-saga/effects'
import { getCategoriesAndDocument } from '../../utils/fairebase';
import { fetchCategoriesSuccess,fetchCategoriesFail,fetchCategoriesStart } from './category-action';
import { CATEGORY_TYPE } from './category-type';


  export function* fetchCategoriesAsync(){ //u can't have await in generator function
    try {
        const categoriesArray = yield call(getCategoriesAndDocument,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesFail(error));
      }
  }

export function* onFetchCategories(){
    yield takeLatest(CATEGORY_TYPE.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])

}

