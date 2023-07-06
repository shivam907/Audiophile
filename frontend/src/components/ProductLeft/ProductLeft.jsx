import React from "react";
import classes from "./ProductLeft.module.css";
const ProductLeft = (props) => {
  return (
    <div className={`${classes["prod"]} ${classes["product-1"]}`}>
      <img src={props.img} alt="" />
      <div className={classes["content-prod"]}>
        {props.newImage && <h2>new product</h2>}
        <h1>
          {props.name} <br /> {props.category}
        </h1>
        <p>{props.description}</p>
        <a href="/xx99-mark-two-headphones.html">SEE PRODUCT</a>
      </div>
    </div>
  );
};

export default ProductLeft;
