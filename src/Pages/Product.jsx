import React, { useContext } from 'react'
import { ShopContext } from '../modules/Context/ShopContext'
import Breadcrum from '../modules/Breadcrum/Breadcrum';
import ProductDisplay from '../modules/ProductDisplay/ProductDisplay';

function Product() {
  const {data_collection}=useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
