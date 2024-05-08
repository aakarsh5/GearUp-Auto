import React from "react";
import Navbar from "./modules/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Last from "./modules/last/Last";
import banner_tyre from "./modules/assets/materials/bannert.png";
import banner_electronics from "./modules/assets/materials/banner_electronics.png";
import banner_interior from "./modules/assets/materials/banner_interior.png";
import banner_exterior from "./modules/assets/materials/banner_exterior.png";
import ShopCatogory from "./Pages/ShopCatogory.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Electronics"
            element={
              <ShopCatogory
                banner={banner_electronics}
                category="electronics"
              />
            }
          />
          <Route
            path="/Interior"
            element={
              <ShopCatogory banner={banner_interior} category="interior" />
            }
          />
          <Route
            path="/Exterior"
            element={
              <ShopCatogory banner={banner_exterior} category="exterior" />
            }
          />
          <Route
            path="/Tyres"
            element={<ShopCatogory banner={banner_tyre} category="tyres" />}
          />
          <Route path="/products/:productId" element={<Product />}> 
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Last />
    </>
  );
}
export default App;
