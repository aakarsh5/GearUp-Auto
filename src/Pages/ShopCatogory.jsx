import React, { useContext } from "react";
import "./CSS/ShopCatogory.css";
import { ShopContext } from "../modules/Context/ShopContext";
import dropdown from "../modules/assets/materials/dropdown.png";
import Item from "../modules/Item/Item";

const ShopCatogory = (props) => {
  const { data_product } = useContext(ShopContext);
  return (
    <div className="shop-catogory">
      <img className="shop-banner" src={props.banner} alt="" />
      <div className="shop-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shop-products">
        {data_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">Explore More</div>
    </div>
  );
};

export default ShopCatogory;
