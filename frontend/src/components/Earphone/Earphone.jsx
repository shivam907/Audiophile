import React from "react";
import img from "../../Images/home/desktop/image-earphones-yx1.jpg";
import classes from "./Earphone.module.css";
const Earphone = () => {
  return (
    <div className={classes["earphone"]}>
      <img src={img} alt="" />
      <div className={classes["content3"]}>
        <h1>YX1 EARPHONES</h1>
        <a href="/yx1.html" className={classes["see"]}>
          SEE PRODUCT
        </a>
      </div>
    </div>
  );
};

export default Earphone;
