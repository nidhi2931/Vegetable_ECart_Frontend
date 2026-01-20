import api from "../api/axios";

export default function Orders(){
    const placeOrder = async()=>{
        await api.post("orders/");
        alert("Order Placed!");
    
    };

    return <button onClick={placeOrder}>Checkout</button>
}