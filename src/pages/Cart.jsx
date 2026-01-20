import {useEffect,useState} from "react";
import api from "../api/axios";
import CartItem from "../components/CartItem";



export default function Cart(){
    const[items,setItems] = useState([]);

    const fetchCart =()=>{
        api.get("cart/").then((res)=>setItems(res.data));
    };

    useEffect(()=>{
        fetchCart();
    },[]);


    const removeItem =async(cartId)=>{
        await api.delete("cart/",{data:{cart_id:cartId}});
        fetchCart();
    };

    const updateQuantity = async (cartId, qty) => {
        if (qty < 1) return;
        await api.put("cart/", { cart_id: cartId, quantity: qty });
        fetchCart();
        };


    const totalAmount =items.reduce(
        (sum,item) =>sum+item.product_price*item.quantity,
        0
    );

    return(
        <div>
            <h2>You Cart</h2>
            {items.map((item)=>(
                <CartItem item={item} onRemove={removeItem} onUpdate={updateQuantity}/>
            ))}

            <h3>Total Amount:{totalAmount}</h3>
        </div>
    );
}

