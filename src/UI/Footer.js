import React from "react";
import logo from "../Images/shared/desktop/logo.svg";
import facebook from "../Images/shared/desktop/icon-facebook.svg";
import instagram from "../Images/shared/desktop/icon-instagram.svg";
import twitter from "../Images/shared/desktop/icon-twitter.svg";

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={classes["content5"]}>
        <div className={classes["foot-nav"]}>
          <div className={classes.line}></div>
          <img src={logo} alt="" className={classes["logo"]} />
          <ul>
            <div>
              <li>HOME</li>
            </div>
            <div>
              <li>HEADPHONES</li>
            </div>
            <div>
              <li>SPEAKERS</li>
            </div>
            <div>
              <li>EARPHONES</li>
            </div>
          </ul>
        </div>
        <div className={classes["foot-col-2"]}>
          <div className={classes["foot-p"]}>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={classes["socials"]}>
            <div>
              <div>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["copyright"]}>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
