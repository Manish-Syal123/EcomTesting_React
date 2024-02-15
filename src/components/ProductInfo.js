import React from "react";
import { useLocation } from "react-router-dom";

const ProductInfo = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div>
      <h2 style={{ color: "black" }}>Product Info</h2>
      <div>
        {item && (
          <>
            <img src={item.image} alt="" width="150px" height="150px" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <br />
            <hr />
            <br />
            <button style={{ backgroundColor: "yellow" }}>Add to Cart</button>
            <br />
            <br />
            <br />
            <button style={{ backgroundColor: "yellow" }}> By Now</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
