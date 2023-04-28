import {all,call} from 'typed-redux-saga'
import { categoriesSaga } from './category/category-saga'
import { userSagas } from './user/user-sga'

export function* rootSage(){
    yield* all([call(categoriesSaga),call(userSagas)])
}