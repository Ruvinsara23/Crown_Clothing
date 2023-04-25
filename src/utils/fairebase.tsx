import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged,User,NextOrObserver} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs,QueryDocumentSnapshot}from 'firebase/firestore';
import { Category } from "../store/category/category-type";


const firebaseConfig = {
  apiKey: "AIzaSyDu2SO-l3WN0xDQom0qZjyw7VgDtTA5JTA",
  authDomain: "crown-clothing-db-3765e.firebaseapp.com",
  projectId: "crown-clothing-db-3765e",
  storageBucket: "crown-clothing-db-3765e.appspot.com",
  messagingSenderId: "951999361188",
  appId: "1:951999361188:web:a55770d4fcb70950513631",
  measurementId: "G-7N5V6JMR9B"
};


const firebaseapp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
export type ObjectToAdd={
    title:string;
};



export const addCollectionAndDocument=async<T extends ObjectToAdd>(
    collectionKey:string
    ,objectsToAdd:T[]): Promise<void>=>{
 const  collectionRef=collection(db,collectionKey)   
 const batch=writeBatch(db)

 objectsToAdd.forEach((object)=> {
    const doRef=doc(collectionRef,object.title.toLowerCase())
    batch.set(doRef,object)
    
 });
 await batch.commit()
 console.log('done')

}

export const getCategoriesAndDocument = async():Promise<Category[]>=>{
    const collectionRef= collection(db,'categories')
    const q =query(collectionRef)

    const querySnapshot= await getDocs(q)
    return querySnapshot.docs.map(docsnapshot=>docsnapshot.data() as Category)
    
//         const {title,items}= docSnapshot.data()
//         acc[title.toLowerCase()]=items;
//         return acc
//     },{})
   
// return categoryMap
}

googleprovider.setCustomParameters({
    prompt:"select_account"
});



export const auth= getAuth()
export const signInWithGooglePopup=()=>signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleprovider);

 
export const db=getFirestore();

export type additinalInformation ={
    displayName?:string;
}

export type userData={
    createAt:Date;
    displayName:string;
    email:string;
}

export const createUserDocumentFromAuth = async(userAuth:User,
    additinalInformation={}as additinalInformation):Promise<void | QueryDocumentSnapshot<userData>>=>{
    const userDocRef = doc (db,'user',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const {displayName, email,}=userAuth;
        const cereatedAt= new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                cereatedAt,
                ...additinalInformation
            });
    
        }catch(error){
            console.log('Error massage is',error)
        }
    
    
    }
    return userSnapshot as QueryDocumentSnapshot<userData>;
};

export const createAuthUserWithEmailAndPassword=async(email:string,password:string)=>{
    if(!email || !password) return;

  return await  createUserWithEmailAndPassword(auth,email,password)
 
}

export const signInAuthUserWithEmailAndPassword=async(email:string,password:string)=>{
    if(!email || !password) return;

  return await  signInWithEmailAndPassword(auth,email,password)
 
}

export const signOutUser =async()=>await signOut(auth)

export const onAuthStateChangedLisner=(callback: NextOrObserver<User>)=>onAuthStateChanged(auth,callback)

export const getCurrentUser=():Promise<User|null>=>{
    return new Promise ((resolve,reject)=>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth)=>{
            unsubscribe();
            resolve(userAuth)
            },reject
        )
    })
}






