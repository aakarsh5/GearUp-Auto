import React from "react";
import Navbar from "./modules/navbar/Navbar";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Product from "./Pages/Product"; 
import Cart from "./Pages/Cart"; 
import Login from "./Pages/Login"; 
import Home from "./Pages/Home";
import Last from "./modules/last/Last";
import banner_tyre from "./modules/assets/materials/bannert.jpg";
import banner_electronics from "./modules/assets/materials/banner_electronics.jpg";
import banner_interior from "./modules/assets/materials/banner_interior.jpg";
import banner_exterior from "./modules/assets/materials/banner_exterior.jpg";
import ShopCatogory from "./Pages/ShopCatogory.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Electronics" element={<ShopCatogory banner={banner_electronics} category="Electronics"/>}/>
        <Route path="/Interior" element={<ShopCatogory banner={banner_interior} category="Interior"/>}/>
        <Route path="/Exterior" element={<ShopCatogory banner={banner_exterior} category="Exterior"/>}/>
        <Route path="/Tyres" element={<ShopCatogory banner={banner_tyre} category="Tyres"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Last/>
    </>
  );
}
export default App;
