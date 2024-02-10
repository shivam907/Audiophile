import React from "react";
import img from "../../Images/home/desktop/image-earphones-yx1.jpg";
import classes from "./Earphone.module.css";
import { Link } from "react-router-dom";
const Earphone = () => {
  return (
    <div className={classes["earphone"]}>
      <img src={img} alt="" />
      <div className={classes["content3"]}>
        <h1>YX1 EARPHONES</h1>
        <Link to="/yx1-earphones" className={classes["see"]}>
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default Earphone;
