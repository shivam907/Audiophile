import React from "react";
import classes from "./Product.module.css";
const Product = (props) => {
  return <div className={classes.products}>{props.children}</div>;
};

export default Product;
