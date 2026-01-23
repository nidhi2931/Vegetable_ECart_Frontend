import {Link,useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import banner from "../../public/banner1.jpg";


export default function Navbar(){
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = ()=>{
        logout();
        navigate("/login");

    };

    return(
        <div class="h-screen flex flex-col">
        <nav className="h-16 p-4 border-b border-gray-300 bg-[#c5aa6a] text-white text-lg">
            <Link to="/">Products</Link> |{" "}
            <Link to="/cart">Cart</Link> |{" "}
            <Link to="/orders">Orders</Link>

            <span style={{float:"right"}}>
                {user ? (
                    <>
                    <span>Welcome, {user}</span>
                    <button onClick={handleLogout}>Logout</button>
                    </>
                ):(
                    <>
                    <Link to="/login">Login</Link> |{" "}
                    <Link to="/signup">Signup</Link>
                    </>
                )}
            </span>
        </nav>
        <div className="flex-1 overflow-hidden">
            <img src={banner} className="w-full h-full object-cover blur-sm" alt="banner"/>
        </div>
        
        </div>
        
           
    )
}