import ReactDOM from "react-dom";
import { useCartContext } from "../context/CartContext";
import deleteIcon from "../assets/images/icon-delete.svg";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

const Cart = ({ cartOpen }) => {
  const { cartItems, setCartItems } = useCartContext();

  return ReactDOM.createPortal(
    <div
      className={
        cartOpen
          ? "absolute w-[95%] max-w-[400px] left-[50%] translate-x-[-50%] top-[5rem] bg-white z-100 rounded-md shadow-md lg:translate-x-[50%]"
          : "hidden"
      }
    >
      <div className="font-bold p-6 border-b-[1px] border-gray-300">
        <span>Cart</span>
      </div>

      <div className="min-h-[12rem] relative">
        {cartItems === 0 ? (
          <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-gray-500">
            Your cart is empty.
          </span>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center">
              <img src={thumbnail} alt="product" className="w-16 rounded-md" />
              <div className="text-gray-500">
                <p>Autumn Limited Edition...</p>
                <p>
                  $125.00 x {cartItems}{" "}
                  <span className="font-bold text-black">{`$${
                    cartItems * 125
                  }.00`}</span>
                </p>
              </div>
              <button onClick={() => setCartItems(0)}>
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
            <button className="w-full h-14 bg-orange-500 text-white rounded-md mt-6">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("cart")
  );
};

export default Cart;
