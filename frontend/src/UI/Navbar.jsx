import React from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/shared/desktop/logo.svg";
import cart from "../Images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Best from "../components/Best/Best";
const Navbar = () => {
  const [scroll, changeScroll] = React.useState(false);

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30;
    changeScroll(distanceY > shrinkOn ? true : false);
  };
  window.addEventListener("scroll", resizeHeaderOnScroll);

  return (
    <nav className={`${styles["navv"]}  ${scroll ? styles.shrink : ""}`}>
      <div className={styles.nav}>
        <img src={logo} alt="" class="logo" />
        <ul>
          <Link to="/">
            <a href="">
              <li>HOME</li>
            </a>
          </Link>
          <Link to="/best">
            <a href="/headphones.html">
              <li>HEADPHONES</li>
            </a>
          </Link>
          <a href="speaker.html">
            <li>SPEAKERS</li>
          </a>
          <a href="earphone.html">
            <li>EARPHONES</li>
          </a>
        </ul>
        <a href="/checkout.html">
          <img src={cart} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
