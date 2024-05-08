import React, { useEffect, useState } from "react";
import "./Collection.css";
// import data_product from '../assets/data';
import Item from "../Item/Item";

function Collection() {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item, i) => {
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

export default Collection;
