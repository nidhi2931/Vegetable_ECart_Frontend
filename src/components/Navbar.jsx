import {Link,useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";



export default function Navbar(){
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = ()=>{
        logout();
        navigate("/login");

    };

    return(
       
        <nav className="h-16 px-8 flex items-center justify-between  border-b border-gray-300 bg-green-800 text-white text-lg">

            <div className="flex items-center gap-4">
                <Link to="/" className="hover:underline">Products</Link>
                <Link to="/cart" className="hover:underline">Cart</Link>
                <Link to="/orders" className="hover:underline">Orders</Link>
            </div>
            

            <div className="flex items-center gap-4">
                {user ? (
                    <>
                    <span className="text-sm">Welcome, {user}</span>
                    <button onClick={handleLogout}
                    className="bg-white text-green-800 px-3 py-1 rounded hover:bg-gray-100">Logout</button>
                    </>
                ):(
                    <>
                    <Link to="/login" className="hover:underline">Login</Link> |{" "}
                    <Link to="/signup" className="hover:underline">Signup</Link>
                    </>
                )}
            </div>
        </nav>
       
        
        
           
    )
}