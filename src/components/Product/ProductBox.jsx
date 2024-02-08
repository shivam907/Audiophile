import React from "react";
import classes from "./ProductBox.module.css";
import { Link } from "react-router-dom";
const ProductBox = (props) => {
  console.log(props.img);
  return (
    <div className={`${classes["prod"]} ${classes["product-1"]}`}>
      {props.index % 2 == 0 && <img src={props.img} alt="" />}
      <div className={classes["content-prod"]}>
        {props.newImage && <h2>new product</h2>}
        <h1>
          {props.name} <br /> {props.category}
        </h1>
        <p>{props.description}</p>
        <Link className={classes.btn} to={"/" + props.link}>
          SEE PRODUCT
        </Link>
      </div>
      {props.index % 2 != 0 && <img src={props.img} alt="" />}
    </div>
  );
};

export default ProductBox;
