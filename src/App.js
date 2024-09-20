import "./styles.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Item name="Laptop" price={100000} />
        <Item name="Pen Drive" price={2000} />
        <Item name="SSD" price={5000} />
        <Cart />
      </div>
    </CartProvider>
  );
}
