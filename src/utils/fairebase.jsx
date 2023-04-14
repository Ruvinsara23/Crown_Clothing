import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs}from 'firebase/firestore';



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


export const addCollectionAndDocument=async(collectionKey,objectsToAdd)=>{
 const  collectionRef=collection(db,collectionKey)   
 const batch=writeBatch(db)

 objectsToAdd.forEach((object)=> {
    const doRef=doc(collectionRef,object.title.toLowerCase())
    batch.set(doRef,object)
    
 });
 await batch.commit()
 console.log('done')

}

export const getCategoriesAndDocument = async()=>{
    const collectionRef= collection(db,'categories')
    const q =query(collectionRef)

    const querySnapshot= await getDocs(q)
    return querySnapshot.docs.map(docsnapshot=>docsnapshot.data())
    
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


export const createUserDocumentFromAuth = async(userAuth,
    additinalInformation={displayName:'mike'})=>{
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
            console.log('Error massage is',error.massage)
        }
    
    
    }
    return userSnapshot;
};

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;

  return await  createUserWithEmailAndPassword(auth,email,password)
 
}

export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;

  return await  signInWithEmailAndPassword(auth,email,password)
 
}

export const signOutUser =async()=>await signOut(auth)

export const onAuthStateChangedLisner=(callback)=>onAuthStateChanged(auth,callback)

export const getCurrentUser=()=>{
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






