import React from "react";
import classes from "./Category.module.css";
import img1 from "../../Images/shared/desktop/image-headphones.png";
import img2 from "../../Images/shared/desktop/icon-arrow-right.svg";
import img3 from "../../Images/shared/desktop/image-speakers.png";
import img4 from "../../Images/shared/desktop/icon-arrow-right.svg";
import img5 from "../../Images/shared/desktop/image-earphones.png";
import img6 from "../../Images/shared/desktop/icon-arrow-right.svg";
export const Category = () => {
  return (
    <>
      <div className={classes["category"]}>
        <div className={classes["block"]}>
          <img className={classes["img-icon"]} src={img1} alt="" />
          <h1>HEADPHONES</h1>
          <div className={classes.blockdiv}>
            <a href="/headphones.html">
              <p>SHOP</p>
              <img src={img2} alt="" />
            </a>
          </div>
        </div>
        <div className={classes["block"]}>
          <img className={classes["img-icon"]} src={img3} alt="" />
          <h1>SPEAKERS</h1>
          <div className={classes.blockdiv}>
            <a href="/speaker.html">
              <p>SHOP</p>
              <img src={img4} alt="" />
            </a>
          </div>
        </div>
        <div className={classes["block"]}>
          <img className={classes["img-icon"]} src={img5} alt="" />
          <h1>EARPHONES</h1>
          <div className={classes.blockdiv}>
            <a href="/earphone.html">
              <p>SHOP</p>
              <img src={img6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
