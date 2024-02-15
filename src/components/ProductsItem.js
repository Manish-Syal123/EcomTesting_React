import React from "react";
import { useNavigate } from "react-router-dom";
const ProductsItem = ({ item }) => {
  const navigate = useNavigate();
  const handleInfoClick = () => {
    navigate("/productinfo", { state: { item } });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          border: "2px solid black",
          width: "300px",
          height: "350px",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <img src={item.image} alt="" width={"150px"} height={"150px"} />
        </div>
        <br />
        <p
          style={{
            fontSize: "larger",
            fontWeight: "bolder",
            fontFamily: "revert-layer",
          }}
        >
          {item.title}
        </p>
        <h5>${item.price}</h5>
        <br />
        <button
          style={{ backgroundColor: "black", color: "white", width: "50%" }}
          onClick={handleInfoClick}
        >
          Info
        </button>
      </div>
    </>
  );
};

export default ProductsItem;
