import { useCartContext } from "../context/CartContext";
import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Navbar = ({ setMenuOpen, setCartOpen }) => {
  const { cartItems } = useCartContext();

  return (
    <header className="w-full max-w-[1500px] min-h-16 fixed top-0 bg-white left-1/2 -translate-x-1/2 flex justify-between items-center px-4 py-5 lg:border-b-[1px] lg:py-10">
      <div className="flex items-center">
        <button className="lg:hidden mr-4" onClick={() => setMenuOpen(true)}>
          <img src={menuIcon} alt="menu" />
        </button>

        <img src={logo} alt="logo" />

        <ul className="hidden lg:flex gap-8 ml-14">
          <li className="relative cursor-pointer text-gray-400 after:absolute after:left-0 after:bottom-[-3.25rem] after:w-0 after:h-[3px] after:bg-orange-500 hover:text-black hover:after:w-full">
            Collections
          </li>
          <li className="relative cursor-pointer text-gray-400 after:absolute after:left-0 after:bottom-[-3.25rem] after:w-0 after:h-[3px] after:bg-orange-500 hover:text-black hover:after:w-full">
            Men
          </li>
          <li className="relative cursor-pointer text-gray-400 after:absolute after:left-0 after:bottom-[-3.25rem] after:w-0 after:h-[3px] after:bg-orange-500 hover:text-black hover:after:w-full">
            Women
          </li>
          <li className="relative cursor-pointer text-gray-400 after:absolute after:left-0 after:bottom-[-3.25rem] after:w-0 after:h-[3px] after:bg-orange-500 hover:text-black hover:after:w-full">
            About
          </li>
          <li className="relative cursor-pointer text-gray-400 after:absolute after:left-0 after:bottom-[-3.25rem] after:w-0 after:h-[3px] after:bg-orange-500 hover:text-black hover:after:w-full">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <button
          className="relative"
          onClick={() => setCartOpen((prevState) => !prevState)}
        >
          {cartItems > 0 ? (
            <div className="absolute -top-1 -right-2 w-5 h-3 bg-orange-500 text-[10px] text-white font-bold rounded-lg flex justify-center items-center">
              {cartItems}
            </div>
          ) : (
            ""
          )}
          <img src={cartIcon} alt="cart" />
        </button>

        <button className="ml-4 lg:ml-10">
          <img
            src={avatar}
            alt="avatar"
            className="w-6 lg:w-12 hover:border-2 hover:border-orange-400 rounded-full"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
