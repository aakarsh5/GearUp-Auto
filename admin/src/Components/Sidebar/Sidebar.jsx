import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product from "../../assets/materials/add_product.png";
import list_icon from "../../assets/materials/list_icon.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_icon} alt="" />
          <p>All Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
