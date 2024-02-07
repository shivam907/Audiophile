import React from "react";
import classes from "./Like.module.css";
const Like = (props) => {
  return (
    <div className={classes["like"]}>
      <h1>YOU MAY ALSO LIKE</h1>
      <div className={classes["likes"]}>
        <div className={classes["likeb"]}>
          <img src={props.likeImage1} alt="" />
          <h1>{props.likeName1}</h1>
          <a className="btn" href="/xx99-mark-one-headphones.html">
            SEE PRODUCT
          </a>
        </div>
        <div className={classes["likeb"]}>
          <img src={props.likeImage2} alt="" />
          <h1>{props.likeName2}</h1>
          <a className="btn" href="/xx99-mark-two-headphones.html">
            SEE PRODUCT
          </a>
        </div>
        <div className={classes["likeb"]}>
          <img src={props.likeImage3} alt="" />
          <h1>{props.likeName3}</h1>
          <a className="btn" href="/zx9.html">
            SEE PRODUCT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Like;
