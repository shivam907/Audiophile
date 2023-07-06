import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import img from "../..//Images/cart/image-xx99-mark-two-headphones.jpg";
const CartModal = (props) => {
  let content = (
    <div className={classes["cart"]}>
      <div className={classes["cartContent"]}>
        <div className={classes["cartrow1"]}>
          <h1>CART (1)</h1>
          <a href="">Remove All</a>
        </div>
        <div className={classes["cartrow2"]}>
          <div className={classes["c1"]}>
            <img src={img} alt="" />
            <div className={classes["card"]}>
              <h1>XX99 MK II</h1>
              <span className={classes["pricec"]}>$ 2,999</span>
            </div>
          </div>
          <div className={classes["quantity"]}>
            <div className={classes["plus"]}>+</div>
            <div className={classes["quantityNumber"]}>1</div>
            <div className={classes["minus"]}>-</div>
          </div>
        </div>
        <div className={classes["cartrow3"]}>
          <p>totall</p>
          <h1>$ 2,999</h1>
        </div>
        <a className={classes["cartbtn"]} href="">
          CHECKOUT
        </a>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};
const Cart = (props) => {
  return (
    <>
      {props.modal && (
        <>
          <div className={classes["overlay"]} onClick={props.close} />

          <CartModal {...props} />
        </>
      )}
    </>
  );
};
export default Cart;
