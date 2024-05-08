import React from 'react'
import'./Offer.css';
import offer_img from '../assets/materials/offer_img1.jpg';

function Offer() {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON PURCHASE ABOVE 999</p>
            <button>Check Now</button>
        </div>  
        <div className="offer-right">
            {/* <img src={offer_img} alt="offer image" /> */}
        </div>
    </div>
  )
}

export default Offer
