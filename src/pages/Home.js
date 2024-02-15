import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching fakeproducts: ", error);
      }
    };
    fetchdata();
  }, []);

  console.log("Products", products);
  return (
    <>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/931/492/non_2x/mobile-phone-represent-of-front-of-shop-store-shopping-online-on-website-or-mobile-application-concept-marketing-and-digital-marketing-free-vector.jpg"
          style={{ width: "100%", height: "700px" }}
          alt=""
        />
      </div>
      <br /> <br />
      <div
        style={{
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          columnGap: "150px",
          rowGap: "50px",
          justifyContent: "center",
        }}
      >
        {products.map((item, index) => (
          <div key={index}>
            <ProductsItem item={item} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
