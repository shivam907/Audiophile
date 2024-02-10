import React from "react";
import classes from "../Checkout/Checkout.module.css";
const Input = (props) => {
  return (
    <div className={`${classes["bill1"]} ${props.error?classes.err:""}`}>
      <div className={classes.label}>
        <p>{props.label}</p>
        {props.error && <p className={classes.error}>Wrong Format</p>}
      </div>
      <input
        ref={props.reff}
        type={`${props.type}`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
