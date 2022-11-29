import ReactDOM from "react-dom";
import closeIcon from "../assets/images/icon-close.svg";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return ReactDOM.createPortal(
    <div
      className={
        menuOpen
          ? "fixed w-full h-full top-0 bg-black/75 z-10"
          : "fixed w-0 h-full top-0 bg-black/75 z-10"
      }
    >
      <div
        className={
          menuOpen
            ? "fixed w-60 top-0 left-0 h-full bg-white z-100 p-6 transition-all duration-300 ease-in-out"
            : "fixed w-60 top-0 left-[-100%] h-full bg-white z-100 p-6 transition-all duration-300 ease-in-out"
        }
      >
        <button onClick={() => setMenuOpen(false)}>
          <img src={closeIcon} alt="close menu" />
        </button>

        <ul className="font-bold text-lg mt-10">
          <li className="my-2">Collections</li>
          <li className="my-2">Men</li>
          <li className="my-2">Women</li>
          <li className="my-2">About</li>
          <li className="my-2">Contact</li>
        </ul>
      </div>
    </div>,
    document.getElementById("menu")
  );
};

export default Menu;
