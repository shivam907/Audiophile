import React from "react";
import classes from "./Speaker2.module.css";
import { Link } from "react-router-dom";
const Speaker2 = () => {
  return (
    <div className={classes["speaker-2"]}>
      <h1>ZX7 SPEAKER</h1>
      <Link to="/zx7-speaker" className={classes["see"]}>
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default Speaker2;
