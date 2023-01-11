
import SignUp from "../../component/sign-up/sign-up-component";
import SignIn from "../../component/sign-in/sign-in-component";
import './authentication-style.scss'


const Authentication =()=>{
    return(
        <div className="auth-container">
        <SignUp />
        <SignIn />
        </div>
    )
}
export default Authentication
