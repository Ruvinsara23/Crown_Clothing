import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './category/category-saga'
import { userSagas } from './user/user-sga'

export function* rootSage(){
    yield all([call(categoriesSaga),call(userSagas)])
}