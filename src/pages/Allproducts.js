import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";

const Allproducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=100"
      );
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      Allproducts
      <div style={{ display: "grid" }}>
        {allProducts.map((item, index) => (
          <ProductsItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
