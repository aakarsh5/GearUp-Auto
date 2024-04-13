import React from 'react'
import './ProductDisplay.css';
import star from '../assets/materials/star.png';
import starf from '../assets/materials/starf.png';

function ProductDisplay(props) {
    const{product} = props;
  return (
    <div className='product-display'>
        <div className="left">
            <div className="image">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-img">
                <img className='main-img' src={product.image} alt="" />
            </div>
        </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
            <img src={starf} alt="" />
            <img src={starf} alt="" />
            <img src={starf} alt="" />
            <img src={starf} alt="" />
            <img src={star} alt="" />
            <p>(122)</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
