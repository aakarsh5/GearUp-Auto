import React ,{useContext} from 'react'
import './ProductDisplay.css';
import starf from '../assets/materials/starf.png';
import star from '../assets/materials/star.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="left">
        <img src={product.image} alt="product image" />
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={starf} alt="star icon" />
          <img src={starf} alt="star icon" />
          <img src={starf} alt="star icon" />
          <img src={starf} alt="star icon" />
          <img src={star} alt="star icon" />
        </div>
        <div className="price">
          <div className="price-old">
            ${product.old_price}
          </div>
          <div className="price-new">
            ${product.new_price}
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        
      </div>
    </div>
  )
}

export default ProductDisplay
