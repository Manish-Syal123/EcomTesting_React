import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigation } from "react-router-dom";
import { addToCart } from "../redux/CartReducer";

const ProductInfo = () => {
  const location = useLocation(); // similar to useRout hook in react-native
  const { item } = location.state || {};
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [ChangeTextAddToCart, setChangeTextAddToCart] = useState(false);

  // console.log(item);

  const AddItemToCart = (item) => {
    setChangeTextAddToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setChangeTextAddToCart(false);
    }, 60000);
  };

  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333", fontSize: "24px", fontWeight: "bold" }}>
        Product Info
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {item && (
          <>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                color: "#333",
                fontSize: "20px",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: "#666", fontSize: "16px", marginBottom: "8px" }}>
              ${item.price}
            </p>
            <p
              style={{ color: "#666", fontSize: "16px", marginBottom: "24px" }}
            >
              {item.description}
            </p>
            <button
              onClick={() => AddItemToCart(item)}
              style={{
                backgroundColor: "#ffc107",
                color: "#333",
                // padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "16px",
                cursor: "pointer",
                border: "none",
                width: "18rem",
              }}
            >
              {ChangeTextAddToCart
                ? "Successfully added to cart"
                : "Add to Cart"}
            </button>
            <button
              style={{
                backgroundColor: "#ffc107",
                color: "#333",
                // padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
                width: "14rem",
              }}
            >
              Buy Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
