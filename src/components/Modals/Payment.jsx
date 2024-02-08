import React from "react";
import ReactDOM from "react-dom";
import classes from "./Payment.module.css";
import { Link } from "react-router-dom";
import img from "../..//Images/cart/image-xx99-mark-two-headphones.jpg";
const CartModal = (props) => {
  let content = (
    <div className={classes.pay}>
      <div className={classes["payment"]}>
        <img src="/Images/done.svg" alt="" />
        <h1>
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>
        <p>you will receive email confirmation shortly</p>
        <div className={classes["paybox"]}>
          <div className={classes["pb1"]}>
            <img src={img} alt="" />
            <div className={classes["pbc"]}>
              <h1>XX99 MK II</h1>
              <p>$ 2,999</p>
            </div>
            <p className={classes["qbc"]}>x 1</p>
          </div>
          <div className={classes["pb2"]}>
            <h1>GRAND TOTAL</h1>
            <p>$ 2,999</p>
          </div>
        </div>
        <Link className={classes["cartbtn"]} To="/">BACK TO HOME</Link>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};
const Payment = (props) => {
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
export default Payment;
