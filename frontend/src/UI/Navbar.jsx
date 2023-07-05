import React from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/shared/desktop/logo.svg";
import cart from "../Images/shared/desktop/icon-cart.svg";
const Navbar = () => {
  return (
    <nav className={styles.navv}>
      <div className={styles.nav}>
        <img src={logo} alt="" class="logo" />
        <ul>
          <a href="">
            <li>HOME</li>
          </a>
          <a href="/headphones.html">
            <li>HEADPHONES</li>
          </a>
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
