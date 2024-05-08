import React from "react";
import PropTypes from "prop-types"; // import PropTypes
import "./Breadcrum.css";
import arrow from "../assets/materials/arrow.png";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow} alt="" />
      Shop <img src={arrow} alt="" /> {product.category}
      <img src={arrow} alt="" /> {product.name}
    </div>
  );
}

// Add propTypes
Breadcrum.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Breadcrum;
