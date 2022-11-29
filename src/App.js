import { useState } from "react";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Lightbox from "./components/Lightbox";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ProductInfo from "./components/ProductInfo";
import CartProvider from "./context/CartContext";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen lg:flex justify-center items-center">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Lightbox
        index={index}
        setIndex={setIndex}
        lightboxOpen={lightboxOpen}
        setLightboxOpen={setLightboxOpen}
      />
      <CartProvider>
        <Navbar setMenuOpen={setMenuOpen} setCartOpen={setCartOpen} />
        <Cart cartOpen={cartOpen} />
        <main className="max-w-[1200px] lg:grid grid-cols-2 gap-16 items-center">
          <Hero index={index} setIndex={setIndex} setLightboxOpen={setLightboxOpen} />
          <ProductInfo />
        </main>
      </CartProvider>
    </div>
  );
};

export default App;
