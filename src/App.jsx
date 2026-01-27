import { BrowserRouter,Routes,Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import PrivateRoute from "./routes/PrivateRoute";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      
      <Routes>
          {/* LANDING PAGE */}
          <Route path="/" element={<LandingPage/>} />

          {/* AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>


          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/orders" element ={<PrivateRoute><Orders /></PrivateRoute>} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;