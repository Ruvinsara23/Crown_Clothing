import { Link, Outlet } from "react-router-dom";
import { Fragment} from "react";//A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
import { ReactComponent as CrwnLogo } from '../../assest/crown.svg';
import './navigation.styles.scss'
import { signOutUser } from "../../utils/fairebase";
import Cart from "../../component/cart/cart-icon";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown";
import { selectIsCartOpen } from "../../store/cart/cart-seletor";
//import { CartContext } from "../../context/cart-context";
import { useSelector } from "react-redux";
import { selectCurrentuser } from "../../store/user/use-selector";

const Navigation =()=>{
  const currentUser= useSelector(selectCurrentuser)
 // const {isCartOpen}=useContext(CartContext)
const isCartOpen=useSelector(selectIsCartOpen)

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
  