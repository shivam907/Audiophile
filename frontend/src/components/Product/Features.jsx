import React from "react";
import classes from "./Features.module.css";
const Features = (props) => {
  return (
    <div className={classes["features"]}>
      <div className={classes["features-1"]}>
        <h1>FEATURES</h1>
        <p>{props.featureDescription1}</p>
        <p>{props.featureDescription2}</p>
        {/* <p>
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
        </p> */}
      </div>
      <div className={classes["features-2"]}>
        <div className={classes["fert"]}>
          <h1>IN THE BOX</h1>
          <ul>
            <div>
              <span className={classes["spn"]}>
                {props.featureListQuantity[0]}x
              </span>
              <p className={classes["pan"]}>{props.featureList[0]}</p>
            </div>
            <div>
              <span className={classes["spn"]}>
                {props.featureListQuantity[1]}x
              </span>
              <p className={classes["pan"]}>{props.featureList[1]} </p>
            </div>
            <div>
              <span className={classes["spn"]}>
                {props.featureListQuantity[2]}x
              </span>
              <p className={classes["pan"]}>{props.featureList[2]}</p>
            </div>
            <div>
              <span className={classes["spn"]}>
                {props.featureListQuantity[3]}x
              </span>
              <p className={classes["pan"]}>{props.featureList[3]}</p>
            </div>
            {/* <div>
              <span className={classes["spn"]}>
                {props.featureListQuantity[4]}x
              </span>
              <p className={classes["pan"]}>{props.featureList[4]}</p>
            </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
