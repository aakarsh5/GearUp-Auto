import React from "react";
import "./AddProduct.css";
import upload_icon from "../../assets/materials/upload_icon.png";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "electronics",
    new_price: "",
    old_price: "",
    company: "",
    model: "",
    year: "2000",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    if (name == "year") {
      const yearValue = parseInt(value);
      if (isNaN(yearValue) || yearValue < 1970 || yearValue > 2024) {
        alert("Enter a valid year");
      }
    }
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="addproduct">
      <div className="itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="price">
        <div className="itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="itemfield">
          <p>Limited Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="price">
        <div className="itemfield">
          <p>Company</p>
          <input
            value={productDetails.company}
            onChange={changeHandler}
            type="text"
            name="company"
            placeholder="Type here"
          />
        </div>
        <div className="itemfield">
          <p>Model</p>
          <input
            value={productDetails.model}
            onChange={changeHandler}
            type="text"
            name="model"
            placeholder="Type here"
          />
        </div>
        <div className="itemfield">
          <p>Year</p>
          <input
            value={productDetails.year}
            onChange={changeHandler}
            type="number"
            name="year"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="itemfield">
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="product-selector"
        >
          <option value="electronics">Electronics</option>
          <option value="interior">Interior</option>
          <option value="exterior">Exterior</option>
          <option value="tyres">Tyres</option>
        </select>
      </div>
      <div className="imagefield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_icon}
            className="thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="add-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
