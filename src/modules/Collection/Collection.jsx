import React from 'react'
import './Collection.css';
import data_product from '../assets/data';
import Item from '../Item/Item';

function Collection() {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collection">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Collection
