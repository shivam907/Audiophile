import React from "react";
import img from "../../Images/home/desktop/image-speaker-zx9.png";
import classes from "./Speaker.module.css";
import { Link } from "react-router-dom";
export const Speaker = () => {
  return (
    <div className={classes["speaker"]}>
      <img src={img} alt="" />
      <div className={classes["content-2"]}>
        <h1>
          ZX9 <br />
          Speaker
        </h1>
        <p>
          Experience natural, life like audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/zx9-speaker">SEE PRODUCT</Link>
      </div>
    </div>
  );
};
