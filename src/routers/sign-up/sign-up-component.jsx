import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/fairebase";
import FormInput from "../form-input/form-input-component";
import "./sign-up-input.style.scss"
import Button from "../button/button-component";


const defaultFormField={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUp =()=>{

    const [formField,setFormField]=useState(defaultFormField)
    const {displayName,email,password,confirmPassword}=formField

const resetFormFeild=()=>setFormField(defaultFormField)
 

const handleSubmit =async(e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
        alert(password)
        return
    }

    try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password)
        await createUserDocumentFromAuth (user,{displayName})
     
resetFormFeild()
    }
    catch(error){
        if (error.code==='auth/email-already-in-use'){
            alert ('user creation erro',error)
        }
        else{
            console.log('user creation erro',error)


        }
        
    }
 
     
    }
    
const handleChange=(event)=>{
    const {name ,value}=event.target;
    setFormField({...formField,[name]:value})

}



console.log(formField)

return(
    <div className='sign-up-container'>
    <h2>Don't have an account </h2>
    <form onSubmit={handleSubmit}>
    <FormInput label='Display Name' required  type='name' name='displayName' onChange={handleChange} value={displayName}/>
    <FormInput label='Email' required  type='email'  name='email' onChange={handleChange} value={email}/>
    <FormInput label='Password' required type='password'  name='password' onChange={handleChange} value={password}/>
    <FormInput label='Confirm Password' required type='password'  name='confirmPassword' onChange={handleChange} value={confirmPassword}/>
    <Button buttontype='google' type='submit'>Sign Up</ Button>
    </form>
    </div>
)
}
export default SignUp;