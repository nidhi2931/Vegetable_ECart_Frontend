export default function CartItem({ item, onRemove, onUpdate }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h4>{item.product_name}</h4>
      <p>₹{item.product_price}</p>

      <button onClick={() => onUpdate(item.id, item.quantity - 1)}>-</button>
      <span> {item.quantity} </span>
      <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+</button>

      <p>Total: ₹{item.product_price * item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
