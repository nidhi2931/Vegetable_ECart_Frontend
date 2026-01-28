export default function ProductCard({
    product,
    quantity,
    onIncrease,
    onDecrease,
    onAddToCart
})
{
    return(
        <div className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
            <img src={product.image || "/placeholder.png"} alt={product.name} className="h-32 w-full object-contain mb-3"/>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}/kg</p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <button onClick={onDecrease} className="px-2 border">-</button>
                    <span>{quantity}/kg</span>

                    <button onClick={onIncrease} className="px-2 border">+</button>
                </div>
                <button onClick={onAddToCart} className="bg-green-800 text-white px-3 py-1 rounded">Add</button>
            </div>
        </div>
    );
}