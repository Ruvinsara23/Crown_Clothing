import { Routes,  Route} from "react-router-dom";

import { useEffect,lazy,Suspense } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user-action";
//import Spinner from "./component/spinner/spiner";

//import Shop from "./routers/shop/shop-component";
//import CheckOut from "./routers/check-out/check-out-compornent";

// import Home from "./routers/home/home-component";
// import Navigation from "./routers/Navigation/navigation-component";
// import Authentication from "./routers/authentication/authentication-component";

// //import { onAuthStateChangedLisner } from "./utils/fairebase";
// import { createUserDocumentFromAuth } from "./utils/fairebase";
// import { setCurrentUser } from "./store/user/user-action";


const Home=lazy(()=>import("./routers/home/home-component"));
const Authentication = lazy(() => import("./routers/authentication/authentication-component"));
const Navigation = lazy(() => import("./routers/Navigation/navigation-component"));
const Shop=lazy(()=>import('./routers/shop/shop-component'))
const CheckOut=lazy(()=>import("./routers/check-out/check-out-compornent"))



const App=()=> {
    const dispatch=useDispatch()

  useEffect(()=>{

    dispatch(checkUserSession())
   /* const unsbscribe=onAuthStateChangedLisner((user)=>{
     if (user) {
      createUserDocumentFromAuth(user)
     }
     dispatch(setCurrentUser(user))
      
  
  })
  return unsbscribe*/
  },[]
  ) 
  return (
    <Suspense fallback={<div>Loding.. </div>}>
    <Routes>
    <Route path ='/' element={<Navigation/>}>
       <Route index  element={<Home />} />
       <Route path='auth' element={<Authentication />} />
       <Route path='Shop/*' element={<Shop />} />
       <Route path="check-out"  element={<CheckOut/>}/>
    </Route>
    </Routes>
    </Suspense> 
   
  );
}

export default App;
