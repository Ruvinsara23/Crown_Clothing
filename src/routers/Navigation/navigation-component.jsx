import { Link, Outlet } from "react-router-dom";
import { Fragment} from "react";//A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
import { ReactComponent as CrwnLogo } from '../../assest/crown.svg';
import './navigation.styles.scss'
import Cart from "../../component/cart/cart-icon";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown";
import { selectIsCartOpen } from "../../store/cart/cart-seletor";
import { useSelector,useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/use-selector";
import { singOutStart } from "../../store/user/user-action";
//import { CartContext } from "../../context/cart-context";


const Navigation =()=>{
  const dispatch=useDispatch();
  const currentUser= useSelector(selectCurrentUser)
 // const {isCartOpen}=useContext(CartContext)
const isCartOpen=useSelector(selectIsCartOpen)

const signOutUser=()=>dispatch(singOutStart())

console.log(currentUser)
    return(
      <Fragment>
      <div className="navigation"> 
        <div>
        <Link className="logo-container" to ="/"> 
        <CrwnLogo  className='logo'/>
        </Link>
        </div>
        <div className="nav-links-container">
        <Link className="nav-link" to='/shop'> Shop </Link>
        {currentUser?(
          <span className="nav-link" onClick={signOutUser} >Sign-Out</span>
        ):(  <Link className="nav-link" to='/auth'>
        Sign-In
       </Link>)}
       <Cart />
       {isCartOpen &&< CartDropdown />}
        </div>
      </div>
      <Outlet />
      </Fragment>
      
    );
   };

export default Navigation
  