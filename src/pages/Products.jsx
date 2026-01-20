import {useEffect,useState} from "react";
import api from "../api/axios";

export default function Products(){
    const [products,setProducts] = useState([]);


    useEffect(()=>{
        api.get("products/").then((res)=>setProducts(res.data));

        
    },[]);

    const addToCart = async(productId)=>{
        try{
            await api.post("cart/",{
                product:productId,
                quantity:1
            });
            alert("Added to Cart");
        }
        catch(err){
            alert("Login required");

        }
    };

    return(
        <div>
            {products.map((p)=>(
                <div key={p.id}>
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                    <button onClick={()=>addToCart(p.id)}>Add to Cart</button>
                    </div>
            ))}
        </div>
    );
}