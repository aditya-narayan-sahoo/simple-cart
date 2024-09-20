import { useCart } from "../contexts/CartContext";
const Item = (props) => {
  const cart = useCart();
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Item Price : {props.price}</p>
      <button
        onClick={() => {
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
