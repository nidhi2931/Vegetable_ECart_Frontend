import {Link,useNavigate} from 'react-router-dom';
import {useContext,useState} from 'react';
import {AuthContext} from "../context/AuthContext";



export default function Navbar(){
    const {user,logout} = useContext(AuthContext);
    const [menuOpen,setMenuOpen] = useState(false);

    const navigate = useNavigate();


    const handleLogout = ()=>{
        logout();
        navigate("/login");

    };

    return(
       
        <nav className="relative h-16 px-8 flex items-center justify-between  border-b border-gray-300 bg-green-800 text-white text-lg">

            <div className="hidden md:flex items-center gap-4">
                <Link to="/products" className="hover:underline">Products</Link>
                <Link to="/cart" className="hover:underline">Cart</Link>
                <Link to="/orders" className="hover:underline">Orders</Link>
            </div>
            
            
            <div className="hidden md:flex items-center gap-4">
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
            <div className="md:hidden text-2xl" onClick={()=>setMenuOpen(!menuOpen)}>
                ☰
            </div>
            {menuOpen &&(
                <div className="absolute top-16 left-0 w-full md:hidden bg-green-900 text-white px-6 py-4 flex flex-col gap-3 z-50">

                    <Link className="block w-full py-2" to="/products" onClick={()=>setMenuOpen(false)}>Products</Link>
                    <Link className="block w-full py-2" to="/cart" onClick ={()=>setMenuOpen(false)}>Cart</Link>
                    <Link className="block w-full py-2" to="/orders" onClick={()=>setMenuOpen(false)}>Orders</Link>

                    {user ?(
                        <button onClick={handleLogout}>Logout</button>
                    ):(
                        <>
                        <Link className="block w-full py-2" to="/login">Login</Link>
                        <Link className="block w-full py-2" to="/signup">Signup</Link>
                        </>
                    )}

                </div>
            )}
        </nav>
       
        
        
           
    )
}