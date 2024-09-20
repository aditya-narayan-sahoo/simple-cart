import { useCart } from "../contexts/CartContext";
export default function Cart() {
  const cart = useCart();
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h2>Cart</h2>
      {cart.items.map((item) => (
        <li>
          {item.name} - {item.price}
        </li>
      ))}
      <h5>Total Bill : {total}</h5>
      <button
        onClick={(index) => {
          cart.setItems((prevItems) => prevItems.slice(0, -1));
        }}
      >
        Remove Last Item
      </button>
      <button onClick={() => cart.setItems([])}>Clear Cart</button>
    </div>
  );
}
