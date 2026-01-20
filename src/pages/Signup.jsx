import {useState} from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom";



export default function Signup(){
    const navigate = useNavigate();

    const [form,setForm] = useState({
        username:"",
        email:"",
        password:"",
        password2:"",
    });


    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});

    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            await api.post("auth/register/",form);
            alert("Signup Successful. Please Login.");
            navigate("/login");

        }
        catch(err){
            alert("Signup failed.");
            console.error(err.response?.data);

        }
       
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            

            <input name="username" placeholder = "Username" onChange={handleChange} />
            <inputt name="email" placeholder ="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="password" name="password2" placeholder="Confirm Password" onChange={handleChange} />


            <button type="submit">Signup</button>
        </form>
    );
}