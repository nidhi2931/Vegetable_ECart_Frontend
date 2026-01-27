import {useState} from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom";
import CardImage from "../assets/Login_Signup_Image.jpg";
import Navbar from "../components/Navbar";



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
        <div>
            <Navbar />
       
            <div className="h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 overflow-hidden relative">
            

            {/* CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden border border-green-100 shadow-[6px_6px_0px_rgba(22,101,52,0.25)] max-w-4xl w-full max-h-[85vh]">


                {/* LEFT IMAGE */}
                <div className="hidden md:block">
                    <img src={CardImage} alt="Vegetables" className="h-full w-full object-cover"/>
                </div>

                {/* RIGHT FORM */}
                <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-green-800 mb-2">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Fresh vegetables delivered to your doorstep
                    </p>

                    <form onSubmit ={handleSubmit} className="space-y-4">
                        <input name="username" placeholder ="Username" onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-screen-600 outline-none" />

                        <input type="email" name="email" placholder="Email" onChange={handleChange} className="w-full px-4 py-2 border rounded
                        focus:ring-2 focus:ring-green-600 outline-none" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-600 outline-none"
                            />

                            <input
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-600 outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
                            >
                                Sign Up
                            </button>
                    </form> 
                     <p className="text-sm text-center mt-4">
                        Already have an account?{" "}
                        <span
                        onClick={() => navigate("/login")}
                        className="text-green-800 cursor-pointer hover:underline"
                        >
                        Login
                        </span>
                    </p>               
                </div>

            </div>
        </div>
    </div>
    );
}