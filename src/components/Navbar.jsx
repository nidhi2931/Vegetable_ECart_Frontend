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
        <nav style={{padding:"10px",borderBottom:"1px solid #ccc"}}>
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
    )
}