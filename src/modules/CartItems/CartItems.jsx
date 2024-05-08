import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../assets/materials/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";

export default function CartItems() {
  const { getTotalAmount, data_product, cartItems, removeToCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {data_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="format main-format">
                <img src={e.image} alt="" className="product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="down">
        <div className="total">
          <h1>Total</h1>
          <div>
            <div className="total-items">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-items">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
