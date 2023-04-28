import { call, put, all, takeLatest } from 'typed-redux-saga/macro'
import { getCategoriesAndDocument } from '../../utils/fairebase';
import { fetchCategoriesSuccess,fetchCategoriesFail} from './category-action';
import { CATEGORY_TYPE } from './category-type';


  export function* fetchCategoriesAsync(){ //u can't have await in generator function
    try {
        const categoriesArray = yield* call(getCategoriesAndDocument);
        yield* put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield* put(fetchCategoriesFail(error as Error));
      }
  }

export function* onFetchCategories(){
    yield* takeLatest(CATEGORY_TYPE.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield* all([call(onFetchCategories)])

}

