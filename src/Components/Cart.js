import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
const cartItems = useSelector((store) => store.cart.items)

const dispatch = useDispatch()
const handleClearCart = () =>  {
   dispatch(clearCart())
}

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-6/12 m-auto">
      <button className="p-2 m-2 rounded-lg font-semibold bg-black text-white"
      onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length == 0 && <h1 className="shadow-sm font-semibold">Cart is empty. Add Items !</h1> }
      <ItemList items={cartItems}/>
      </div>
    </div>
    
  );
};

export default Cart;
