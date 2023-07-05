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
          <img src={logo} alt="" className={classes["logo"]} />
          <ul>
            <a href="">
              <li>HOME</li>
            </a>
            <a href="">
              <li>HEADPHONES</li>
            </a>
            <a href="">
              <li>SPEAKERS</li>
            </a>
            <a href="">
              <li>EARPHONES</li>
            </a>
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
