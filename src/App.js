import { Routes,   Route} from "react-router-dom";
import Home from "./routers/home/home-component";
import Navigation from "./routers/Navigation/navigation-component";
import Authentication from "./routers/authentication/authentication-component";
import Shop from "./routers/shop/shop-component";
import CheckOut from "./routers/check-out/check-out-compornent";





const App=()=> {
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
