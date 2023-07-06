import React from "react";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <div className={classes["hero"]}>
      <div className={classes["heading-hero"]}>{props.heading}</div>;
    </div>
  );
};

export default header;
