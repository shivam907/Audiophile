import React from "react";
import ReactDOM from "react-dom";
import classes from "./Payment.module.css";
import { Link } from "react-router-dom";
import data from "../../Data/products.json";
import { removeItem } from "../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const CartModal = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartItem, setCartItem] = React.useState();
  const [price, setPrice] = React.useState()
  React.useEffect(() => {
    let arr = [];
    // cart.items.forEach((item) => {
    let item = cart.items[0];
    setPrice(cart.price+50)
    data.products.forEach((i) => {
      if (i.shortName === item.text) {
        arr.push(
          <div className={classes.pb1}>
            <div className={classes["pb"]}>
              <img src={i.cartImage} alt="" />
              <div className={classes["pbc"]}>
                <h1>{i.shortName}</h1>
                <p>$ {i.price}</p>
              </div>
              <p className={classes["qbc"]}>x {item.quantity}</p>
            </div>
            {cart.items.length > 1 && (
              <div className={classes.pb3}>
                <p>and {cart.items.length - 1} other item(s)</p>
              </div>
            )}
          </div>
        );
      }
    });
    // });
    setCartItem(arr);
    dispatch(removeItem())
  }, []);
  let content = (
    <div className={classes.pay}>
      <div className={classes["payment"]}>
        <img src="/Images/done.svg" alt="" />
        <h1>
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>
        <p>you will receive email confirmation shortly</p>
        <div className={classes["paybox"]}>
          {cartItem}
          <div className={classes["pb2"]}>
            <h1>GRAND TOTAL</h1>
            <p>$ {price}</p>
          </div>
        </div>
        <Link className={classes["cartbtn"]} to="/">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};
const Payment = (props) => {
  return (
    <>
      {props.modal && (
        <>
          <div className={classes["overlay"]} onClick={props.close} />
          <CartModal />
        </>
      )}
    </>
  );
};
export default Payment;
