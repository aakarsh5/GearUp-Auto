import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

function Navbar() {

  const [menu,setmenu] = useState("Parts");

  return <div className="navbar">
  <div className="navlogo">

    <img src={logo} style={{width:'90px', height:'90px'}}alt="logo here"/>
    <center><p>Nuts And Parts</p></center>
  </div>
  <ul className="navitems">
    <li onClick={()=>{setmenu("Home")}}><Link style={{textDecoration: 'none'}} to="/">Home</Link >{menu==="Home"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("Electronics")}}><Link style={{textDecoration: 'none'}} to="/Electronics">Electronics</Link>{menu==="Electronics"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("Interior")}}><Link style={{textDecoration: 'none'}} to="/Interior">Interior</Link>{menu==="Interior"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("Exterior")}}><Link style={{textDecoration: 'none'}} to="/Exterior">Exterior</Link>{menu==="Exterior"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("Tyres")}}><Link style={{textDecoration: 'none'}} to="/Tyres">Tyres</Link>{menu==="Tyres"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("Contacts")}}><Link style={{textDecoration: 'none'}} to="/Contacts">Contacts</Link>{menu==="Contacts"?<hr/>:<></>}</li>
  </ul>
  <div className="loginCart">
    <Link to="/Login"><button>login</button></Link>
    <Link to="/Cart"><img src={cart} style={{width:'30px', height:'30px'}} alt="cart"/></Link>
    <div className="cartcount">0</div>
  </div>
  </div>;
}

export default Navbar;
