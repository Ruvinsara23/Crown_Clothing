import{all,put,call,takeLatest} from 'redux-saga/effects'

import { USER_ACTION_TYPE } from './user-type'

import { signInSuccess,signInFailed, signUpSuccess, signUpFailed, signOutSucces, signOutFailed } from './user-action'

import { getCurrentUser,createUserDocumentFromAuth,signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword,signOutUser } from '../../utils/fairebase'

export function* getSnapshotFronUserAuth(userAuth,addionaldetails){
    try {
        const userSnapshot=yield call(createUserDocumentFromAuth,userAuth,addionaldetails);
        yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
        console.log(userSnapshot);
        console.log(userSnapshot.data())
    }catch(error){
        yield put(signInFailed(error))
    }
}

export function* signOut(){
    try{
        yield call(signOutUser);
        yield put (signOutSucces());
    } catch(error){
        yield put (signOutFailed(error))

    }
    

}

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user}= yield call (createAuthUserWithEmailAndPassword,email,password);
        yield put(signUpSuccess(user,{displayName}))
    } catch(error){
     yield put (signUpFailed(error))
    }

}

export function* signInAfterSignUp({payload:{user,additionalDetails}}){
    yield call(getSnapshotFronUserAuth,user,additionalDetails)
}

export function* signInWithEmail({payload:{email,password}}){
 try{
    const {user}=yield call(
        signInAuthUserWithEmailAndPassword,email,password
    );yield call(getSnapshotFronUserAuth,user);
 }catch(error){
    yield put (signInFailed(error))
}
}


export function* signInWithGoogle(){
   try {
      const {user}=yield call(signInWithGooglePopup);
      yield call(getSnapshotFronUserAuth,user)
   }catch(error){
    yield put(signInFailed(error))

   }
}

export function* isUserAuthenticated(){
    try{
        const userAuth=yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFronUserAuth,userAuth)
    }catch(error){

    }
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START,signUp)
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCES,signInAfterSignUp)
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START,signOut)
}


export function* userSagas(){
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
     ])
}
