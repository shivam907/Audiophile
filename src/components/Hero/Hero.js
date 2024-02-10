import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className={classes["hero"]}>
      <div className={classes["heroo"]}>
        <div className={classes["content"]}>
          <h2>NEW PRODUCT</h2>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/xx99-mark-two-headphones">SEE PRODUCT</Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
