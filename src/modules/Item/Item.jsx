import React from "react";
import { Link } from "react-router-dom"; // import Link
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="image" />
      </Link>
      {/* use backticks */}
      <p>{props.name}</p>
      <div className="price">
        <div className="new">${props.new_price}</div>
        <div className="old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
