import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_product from "../assets/data_popular.js";
import Item from "../Item/Item";

function Popular() {
  const [popularp, setPopularp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularelectronics")
      .then((response) => response.json())
      .then((data) => setPopularp(data));
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN ELECTRONICS</h1>
      <hr />
      <div className="items">
        {popularp.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default Popular;
