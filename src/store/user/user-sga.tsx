import{all,put,call,takeLatest} from 'typed-redux-saga/macro'

import { USER_ACTION_TYPE } from './user-type';
import { User } from 'firebase/auth';

import { signInSuccess,signInFailed, signUpSuccess, signUpFailed, signOutSucces, signOutFailed,EmailSignInStart,signUpStart, SignUpStart,SignUpSuccess } from './user-action'

import { getCurrentUser,createUserDocumentFromAuth,signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword,signOutUser,additinalInformation } from '../../utils/fairebase'

export function* getSnapshotFronUserAuth(userAuth:User,addionaldetails?:additinalInformation){
    try {
        const userSnapshot=yield * call(createUserDocumentFromAuth,userAuth,addionaldetails);
        if(userSnapshot){
            yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
            console.log(userSnapshot);
            console.log(userSnapshot.data())
        }
    }catch(error){
        yield put(signInFailed(error as Error))
    }
}

export function* signOut(){
    try{
        yield call(signOutUser);
        yield put (signOutSucces());
    } catch(error){
        yield put (signOutFailed(error as Error))

    }
    

}

export function* signUp({payload:{email,password,displayName}}:SignUpStart){
    try{
        const  userCredential= yield* call (createAuthUserWithEmailAndPassword,email,password);
         if(userCredential){
            const {user}=userCredential;
            yield* put(signUpSuccess(user,{displayName}))
         }

        
    } catch(error){
     yield put (signUpFailed(error as Error))
    }

}

export function* signInAfterSignUp({payload:{user,additionalDetails}}:SignUpSuccess){
    yield call(getSnapshotFronUserAuth,user,additionalDetails)
}

export function* signInWithEmail({payload:{email,password}}:EmailSignInStart){
 try{
    const {user}=yield call(
        signInAuthUserWithEmailAndPassword,email,password
    );yield call(getSnapshotFronUserAuth,user);
 }catch(error){
    yield put (signInFailed(error as Error))
}
}


export function* signInWithGoogle(){
   try {
      const {user}=yield* call(signInWithGooglePopup);
      yield call(getSnapshotFronUserAuth,user)
   }catch(error){
    yield put(signInFailed(error as Error))

   }
}

export function* isUserAuthenticated(){
    try{
        const userAuth=yield* call(getCurrentUser);
        if (!userAuth) return;
        yield* call(getSnapshotFronUserAuth,userAuth)
    }catch(error){

    }
}

export function* onSignUpStart(){
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START,signUp)
}

export function* onGoogleSignInStart(){
    yield* takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield* takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignUpSuccess(){
    yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCES,signInAfterSignUp)
}

export function* onSignOutStart(){
    yield* takeLatest(USER_ACTION_TYPE.SIGN_OUT_START,signOut)
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
