import React from "react";
import classes from "./ProductHero.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cartSlice";

const ProductHero = (props) => {
  const cart=useSelector(state=>state.cart)
  const dispatch= useDispatch()
  const cartHandler=()=>{
    dispatch(addItem({
      name:props.name,
      quantity:0
    }))
    console.log(cart)
  }
  return (
    <div className={`${classes["prod"]} ${classes["product-1"]}`}>
      <img src={props.img} alt="" />
      <div className={classes["content-prod"]}>
        <h1>
          {props.name} <br /> {props.category}
        </h1>
        <p>{props.description}</p>
        <h1 className={classes["price"]}>$ {props.price}</h1>
        <div className={classes["btns"]}>
          <div className={classes["quantity"]}>
            <div className={classes["plus"]}>+</div>
            <div className={classes["quantityNumber"]}>1</div>
            <div className={classes["minus"]}>-</div>
          </div>
          <div className="btn" onClick={cartHandler}>
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
