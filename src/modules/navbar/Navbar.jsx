import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
  const [menu, setmenu] = useState("Parts");
  const { getTotalItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navlogo">
        <img
          src={logo}
          style={{ width: "90px", height: "90px" }}
          alt="logo here"
        />
        <center>
          <p></p>
        </center>
      </div>
      <ul className="navitems">
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
            <button>login</button>
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
