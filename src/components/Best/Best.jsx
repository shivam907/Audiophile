import React from "react";
import img from "../../Images/shared/desktop/image-best-gear.jpg";
import classes from "./Best.module.css";
const Best = () => {
  return (
    <div className={classes["thebest"]}>
      <div className={classes["content4"]}>
        <h1>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Best;
