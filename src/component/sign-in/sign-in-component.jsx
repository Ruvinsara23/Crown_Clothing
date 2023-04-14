import { useDispatch } from "react-redux";
import { useState,useContext } from "react";
import FormInput from "../form-input/form-input-component";
import "./sign-in-input.style.scss"
import Button from "../button/button-component";
import { getRedirectResult } from "firebase/auth";
import { signInWithGooglePopup,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, auth} from "../../utils/fairebase";
import { UserContext } from "../../context/user.context";
import { emailSignInStart, googleSignInStart } from "../../store/user/user-action";


const defaultFormField={
    email:'',
    password:'',

}

const SignIn=()=>{
    const dispatch= useDispatch();
    const [formField,setFormField]=useState(defaultFormField)
    const {email,password}=formField

    const {setCurrentUser}= useContext(UserContext)

const resetFormFeild=()=>setFormField(defaultFormField)


 

const handleSubmit =async(e)=>{
    e.preventDefault()
 


    try{
        dispatch(emailSignInStart(email,password))
        resetFormFeild()
    }
    catch(error){
        console.log('sign in fail',error)
    }
     
    }
    
const handleChange=(event)=>{
    const {name ,value}=event.target;
    setFormField({...formField,[name]:value})

}


const logGoogleUser = async()=>{
 dispatch(googleSignInStart());
     
};



console.log(formField)

return(
    <div className='sign-up-container'>
        <h2>Already have an account </h2>
         <span>Sign-In with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput label='Email' required  type='email'  name='email' onChange={handleChange} value={email}/>
            <FormInput label='Password' required type='password'  name='password' onChange= 
             {handleChange} value={password}/>     
        <div className="abc">
        <Button buttontype='inverted' type='submit'>Sign in</ Button>
        <Button buttontype='google' type ='button' onClick={logGoogleUser}>Google Sign in</Button>
        </div>
        
    
     </form>
    </div>
)
}
export default SignIn;