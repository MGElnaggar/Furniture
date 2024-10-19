import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Posts from "./Pages/Posts/Posts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
import OrderSubmitted from "./Pages/OrderSubmitted/OrderSubmitted";


function App() {
  return (
    <>
      <BrowserRouter basename="/Furniture">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shop" element={ <Shop /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/contact-us" element={ <ContactUs /> } />
          <Route path="/posts" element={ <Posts /> } />
          <Route path="/about-us" element={ <AboutUs /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/checkout" element={ <CheckOut /> } />
          <Route path="/order-submitted" element={ <OrderSubmitted /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
