import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Counter from "./Counter";
import cartIcon from "../assets/images/icon-cart-white.svg";

const ProductInfo = () => {
  const [count, setCount] = useState(0);

  const { setCartItems } = useCartContext();

  return (
    <div className="p-6">
      <p className="text-orange-500 text-sm font-bold spacing tracking-widest">
        SNEAKER COMPANY
      </p>

      <h1 className="text-3xl font-bold py-4 lg:text-5xl">Fall Limited Edition Sneakers</h1>

      <p className="text-gray-500 text-[.95rem] lg:text-[1.1rem] lg:py-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex justify-between items-center py-6 lg:flex-col lg:items-start">
        <div className="flex items-center">
          <p className="text-[1.8rem] font-bold mr-4">$125.00</p>
          <p className="text-orange-500 font-bold bg-orange-100 px-2 rounded-md">
            50%
          </p>
        </div>
        <p className="text-gray-300 line-through font-bold">$250.00</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <Counter count={count} setCount={setCount} />
        <button className="w-full h-14 bg-orange-500 text-white flex justify-center items-center rounded-md font-semibold text-md" onClick={() => {
          setCartItems(prevItems => prevItems + count);
          setCount(0);
        }}>                 
          <img src={cartIcon} alt="cart icon" className="mr-4" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
