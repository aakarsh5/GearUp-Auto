import React from 'react'
import './Newsletter.css';

function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Get Updated On Gmail</h1>
      <p>Subscribe To Newsletter</p>
      <div className='input'>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
