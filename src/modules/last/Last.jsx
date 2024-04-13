import React from 'react'
import './Last.css';
import instagram from '../assets/materials/instagram.jpg'
import whatsapp from '../assets/materials/whatsapp.jpg'
import x from '../assets/materials/x.jpg'

function Last() {
    return (
        <div className='footer'>
          <div className="footer-logo">
            <img src="whatsapp" alt="footer" />
            <p>SHOPPER</p>
          </div>
          
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contacts</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram} alt="imstagram" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="whatsapp" />
                </div>
                <div className="footer-icon-container">
                    <img src={x} alt="x" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
      )
}

export default Last
