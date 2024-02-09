import React from "react";
import classes from "./ProductHero.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cartSlice";

const ProductHero = (props) => {
  const [quantity, setQuantity]= React.useState(1)
  const cart=useSelector(state=>state.cart)
  const dispatch= useDispatch()
  const cartHandler=()=>{
    console.log(props.shortName)
    dispatch(
      addItem({
        name: props.shortName,
        quantity: quantity,
        price: props.price
      })
    );
    console.log(cart)
  }
  const plusHandler=()=>{
    setQuantity(prev=>prev+1);
  }
  const minusHandler=()=>{
    setQuantity(prev=>prev<=1?1:prev-1);
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
            <div className={classes["plus"]} onClick={plusHandler}>+</div>
            <div className={classes["quantityNumber"]}>{quantity}</div>
            <div className={classes["minus"]} onClick={minusHandler}>-</div>
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
