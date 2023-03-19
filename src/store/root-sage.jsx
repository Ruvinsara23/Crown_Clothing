import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './category/category-saga'

export function* rootSage(){
    yield all([call(categoriesSaga)])
}