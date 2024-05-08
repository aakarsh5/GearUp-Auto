import React, { useContext } from "react";
import { ShopContext } from "../modules/Context/ShopContext";
import Breadcrum from "../modules/Breadcrum/Breadcrum";
import ProductDisplay from "../modules/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

function Product() {
  const { data_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = data_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div className="not">not found</div>;
  } else {
    return (
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
    );
  }
}

export default Product;
