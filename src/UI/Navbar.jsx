import React from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/shared/desktop/logo.svg";
import cart from "../Images/shared/desktop/icon-cart.svg";
import Cart from "../components/Modals/Cart";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [modal, setModal] = React.useState(false);
  const sett = () => {
    setModal(true);
  };
  const resett = () => {
    setModal(false);
  };
  return (
    <>
      <Cart modal={modal} open={sett} close={resett} />
      <nav className={`${styles["navv"]}`}>
        <div className={styles.nav}>
          <img src={logo} alt="" className="logo" />
          <ul>
            <Link to="/">
              <div>
                <li>HOME</li>
              </div>
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
      </nav>
    </>
  );
};

export default Navbar;
