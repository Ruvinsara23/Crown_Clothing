import { Routes,   Route} from "react-router-dom";
import Home from "./routers/home/home-component";
import Navigation from "./routers/Navigation/navigation-component";
import Authentication from "./routers/authentication/authentication-component";
import Shop from "./routers/shop/shop-component";
import CheckOut from "./routers/check-out/check-out-compornent";
import { useEffect } from "react";
import { onAuthStateChangedLisner } from "./utils/fairebase";
import { createUserDocumentFromAuth } from "./utils/fairebase";
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";




const App=()=> {
    const dispatch=useDispatch()

  useEffect(()=>{
    const unsbscribe=onAuthStateChangedLisner((user)=>{
     if (user) {
      createUserDocumentFromAuth(user)
     }
     dispatch(setCurrentUser(user))
      
  
  })
  return unsbscribe
  },[dispatch]
  )
  
  return (
    <Routes>
    <Route path ='/' element={<Navigation/>}>
       <Route index  element={<Home />} />
       <Route path='auth' element={<Authentication />} />
       <Route path='Shop/*' element={<Shop />} />
       <Route path="check-out"  element={<CheckOut/>}/>
    </Route>
    </Routes>
     
   
  );
}

export default App;
