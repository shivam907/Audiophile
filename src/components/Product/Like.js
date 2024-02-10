import React from "react";
import { Link } from "react-router-dom";
import classes from "./Like.module.css";
const Like = (props) => {
  return (
    <div className={classes["like"]}>
      <h1>YOU MAY ALSO LIKE</h1>
      <div className={classes["likes"]}>
        <div className={classes["likeb"]}>
          <img src={props.likeImage[0]} alt="" />
          <h1>{props.likeName[0]}</h1>
          <Link className="btn" to={props.url[0]}>
            SEE PRODUCT
          </Link>
        </div>
        <div className={classes["likeb"]}>
          <img src={props.likeImage[1]} alt="" />
          <h1>{props.likeName[1]}</h1>
          <Link className="btn" to={props.url[1]}>
            SEE PRODUCT
          </Link>
        </div>
        <div className={classes["likeb"]}>
          <img src={props.likeImage[2]} alt="" />
          <h1>{props.likeName[2]}</h1>
          <Link className="btn" to={props.url[2]}>
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Like;
