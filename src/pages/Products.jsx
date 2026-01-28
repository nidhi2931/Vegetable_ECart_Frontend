import {useEffect,useState} from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tomato from "../assets/vegetable_images/tomato.png";
import potato from "../assets/vegetable_images/potato.png";
import onion from "../assets/vegetable_images/onion.png";
import mushroom from "../assets/vegetable_images/mushroom.png";


const PRODUCTS =[
    {id:1,name:"Tomato",price:40,image:tomato},
    {id:2,name:"Potato",price:20,image:potato},
     {id:3,name:"Onion",price:30,image:onion},
      {id:4,name:"Mushroom",price:15,image:mushroom},

]

export default function Products(){
    const [quantities,setQuantities] = useState({});
    const [cart,setCart] = useState([]);

    const increaseQty=(id)=>{
        setQuantities(prev=>({
            ...prev,
            [id]:(prev[id]||1)+1
        }));
        
    };

    const decreaseQty=(id)=>{
        setQuantities(prev=>({
            ...prev,
            [id]:Math.max(1,(prev[id]||1)-1)
        }));
    };

    const addToCart = (product)=>{
        const qty = quantities[product.id] || 1;
        setCart([...cart,{...product,qty}]);
    };

    return(
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-1 bg-[#f0fdf4]">

                {/* SIDEBAR */}
                <aside className="hidden md:block w-64 bg-white border-r border-green-100 p-4">

                    <h3 className="font-semibold text-green-800 mb-4">Catgories</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="cursor-pointer hover:text-green-700">Leafy</li>
                        <li className="cursor-pointer hover:text-green-700">Root</li>
                        <li className="cursor-pointer hover:text-green-700">Seasonal</li>
                        <li className="cursor-pointer hover:text-green-700">Organic</li>
                    </ul>                
                </aside>

                {/* PRODUCTS GRID */}
                <main className="flex-1 p-6">
                    <h2 className="text-xl font-bold text-green-800 mb-6">
                        Fresh Vegetables
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {PRODUCTS.map((product)=>(
                            <ProductCard key={product.id} product={product} quantity={quantities[product.id] || 1} onIncrease={()=>increaseQty(product.id)} onDecrease={()=>decreaseQty(product.id)}/>
                        ))}
                    </div>
                </main>
            </div>

            {/* FOOTER */}
            <Footer />
       </div>
    );
}