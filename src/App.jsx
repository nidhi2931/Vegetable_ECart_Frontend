import { BrowserRouter,Routes,Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Products/>}/>
          <Route path ="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/orders" element ={<PrivateRoute><Orders /></PrivateRoute>} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;