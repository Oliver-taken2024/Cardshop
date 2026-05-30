import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import CardItem from "./Components/CardItem";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";

function App() {
  const [cart, setCart] = useState([]);

  //prev = gammla cart-innehåll
  //...prev= kopierar gamla items
  //[...prev, card]= lägger till nytt card sist
  const addToCart = (card) => {
    setCart((prev) => [...prev, card]);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <Routes>
        {/* Här ser route att värdet från Url har ändrats till menu/1 och den gör det dynamiskr */}
        <Route path="/menu/:categoryId" element={<Menu />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
