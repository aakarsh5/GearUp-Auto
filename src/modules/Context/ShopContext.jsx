import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = Number(0);
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [data_product, setData_Product] = useState([]);
  const [cartItems, setcartItems] = useState(getDefaultCart());
  const [years, setYears] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/allproducts");
        const data = await response.json();
        setData_Product(data);
        extractYears(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
  
      if (localStorage.getItem("auth-token")) {
        try {
          const response = await fetch("http://localhost:5000/getcart", {
            method: "POST",
            headers: {
              Accept: "application/form-data",
              "auth-token": `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
            body: "",
          });
          const data = await response.json();
          setcartItems(data);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      }
    };
  
    fetchData();
  }, []);
  
  const extractYears = (data) => {
    const uniqueYears = [...new Set(data.map((product) => product.year))];
    setYears(uniqueYears);
  };
  
  const fetchCompanies = async (selectedYear) => {
    try {
      const response = await fetch(`http://localhost:5000/companies/${selectedYear}`);
      console.log(response.data);
      const company = await response.json();
      setCompanies(company);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  
  const fetchModels = async (selectedYear, selectedCompany) => {
    try {
      const fetchedRecords = [];
      const response = await fetch(`http://localhost:5000/models/${selectedYear}/${selectedCompany}`);
      const model = await response.json();
      console.log(model);
      setModels(model);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };
  
  const addToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const removeToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:5000/removetocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalAmount = () => {
    let totalAmount = Number(0);
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalItems,
    getTotalAmount,
    data_product,
    cartItems,
    addToCart,
    removeToCart,
    years,
    companies,
    models,
    fetchCompanies,
    fetchModels,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
