import React, { useContext, useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { ShopContext } from "../Context/ShopContext";
import navdrop from '../assets/materials/navdown.png';

function Navbar() {
  const [menu, setmenu] = useState("Parts");
  const { getTotalItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('navitems-visible');
    e.target.classList.toggle('open');
    
  }

  return (
    <div className="navbar">
      <div className="navlogo" onClick={() => navigate("/")}>
        <img
          src={logo}
          style={{ width: "90px", height: "90px" }}
          alt="logo here"
        />
        <center>
          <p></p>
        </center>
      </div>
      <img className="nav-drop" onClick={dropdown_toggle}  src={navdrop} alt="" />
      <ul ref={menuRef} className="navitems">
        <li
          onClick={() => {
            setmenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Electronics");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Electronics"
          >
            Electronics
          </Link>
          {menu === "Electronics" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Interior");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Interior"
          >
            Interior
          </Link>
          {menu === "Interior" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Exterior");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Exterior"
          >
            Exterior
          </Link>
          {menu === "Exterior" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Tyres");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/Tyres">
            Tyres
          </Link>
          {menu === "Tyres" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="loginCart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/Cart">
          <img
            src={cart}
            style={{ width: "30px", height: "30px", color: "white" }}
            alt="cart"
          />
        </Link>
        <div className="cartcount">{getTotalItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
