import React from "react";
import classes from "./Gallery.module.css";
const Gallery = (props) => {
  return (
    <div className={classes["gallery"]}>
      <div className={classes["img1"]}>
        <img src={props.galleryImage1} alt="" />
        <img src={props.galleryImage2} alt="" />
      </div>
      <img src={props.galleryImage3} alt="" className={classes["img2"]} />
    </div>
  );
};

export default Gallery;
