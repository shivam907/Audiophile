import React from "react";
import classes from "./Products.module.css";
const Products = (props) => {
  return <div className={classes.products}>{props.children}</div>;
};

export default Products;
