import {useState,useContext} from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";


export default function Login(){
    const {login} = useContext(AuthContext);
    const [form,setForm] = useState({username:"",password:""});


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await api.post('auth/login/',form);
        login(res.data.username,res.data.access);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})} />
            <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} />
            <button>Login</button>
        </form>
    );
}