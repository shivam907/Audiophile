import React from "react";
import classes from "./Hero.module.css";
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
          <a href="/xx99-mark-two-headphones.html">SEE PRODUCT</a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
