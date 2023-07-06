import React from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/shared/desktop/logo.svg";
import cart from "../Images/shared/desktop/icon-cart.svg";
import Cart from "../components/Modals/Cart";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Best from "../components/Best/Best";
const Navbar = () => {
  const [scroll, changeScroll] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30;
    changeScroll(distanceY > shrinkOn ? true : false);
  };
  window.addEventListener("scroll", resizeHeaderOnScroll);
  const sett = () => {
    setModal(true);
  };
  const resett = () => {
    setModal(false);
  };
  return (
    <>
      <Cart modal={modal} open={sett} close={resett} />
      <nav className={`${styles["navv"]}  ${scroll ? styles.shrink : ""}`}>
        <div className={styles.nav}>
          <img src={logo} alt="" className="logo" />
          <ul>
            <Link to="/">
              <a href="">
                <li>HOME</li>
              </a>
            </Link>
            <Link to="/Headphones">
              <a href="/headphones.html">
                <li>HEADPHONES</li>
              </a>
            </Link>
            <Link to="/Speakers">
              <a href="speaker.html">
                <li>SPEAKERS</li>
              </a>
            </Link>
            <Link to="/Earphones">
              <a href="earphone.html">
                <li>EARPHONES</li>
              </a>
            </Link>
          </ul>
          <div onClick={sett}>
            <img src={cart} alt="" />
          </div>
        </div>
        {/* {modal && <Cart />} */}
      </nav>
    </>
  );
};

export default Navbar;
