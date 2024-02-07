import React from "react";
import { Link } from "react-router-dom";
import classes from "../ProductLeft/ProductLeft.module.css";
const ProductRight = (props) => {
  return (
    <div className={`${classes["prod"]} ${classes["product-1"]}`}>
      <div className={classes["content-prod"]}>
        {props.newImage && <h2>new product</h2>}
        <h1>
          {props.name} <br /> {props.category}
        </h1>
        <p>{props.description}</p>
        <Link className={classes.btn} to={"/"+props.Link}>
          SEE PRODUCT
        </Link>
      </div>

      <img src={props.img} alt="" />
    </div>
  );
};

export default ProductRight;
