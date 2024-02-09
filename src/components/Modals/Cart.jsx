import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import data from "../../Data/products.json"
const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)
  const [cartItem, setCartItem] = React.useState()
  const remove=()=>{
    dispatch(removeItem())
  }
  React.useEffect(()=>{
  let arr=[]
  cart.items.forEach(item=>{
    data.products.forEach(i=>{
      if(i.shortName===item.text){
        console.log(i)
        arr.push(
          <div className={classes["cartrow2"]}>
            <div className={classes["c1"]}>
              <img src={i.cartImage} alt="" />
              <div className={classes["card"]}>
                <h1>{i.shortName}</h1>
                <span className={classes["pricec"]}>$ {item.price}</span>
              </div>
            </div>
            <div className={classes["quantity"]}>
              <div
                className={classes["plus"]}
                onClick={() =>
                  dispatch(
                    addItem({
                      name: i.shortName,
                      quantity: 1,
                    })
                  )
                }
              >
                +
              </div>
              <div className={classes["quantityNumber"]}>{item.quantity}</div>
              <div
                className={classes["minus"]}
                onClick={() =>
                  dispatch(
                    addItem({
                      name: i.shortName,
                      quantity: -1,
                    })
                  )
                }
              >
                -
              </div>
            </div>
          </div>
        );
      }
    })
  })
  if (cart.items.length === 0) {
    arr.push(<p className={classes.empty}>Your cart is empty</p>);
  }
  setCartItem(arr);
  },[cart,dispatch])
  let content = (
    <div className={classes["cart"]}>
      <div className={classes["cartContent"]}>
        <div className={classes["cartrow1"]}>
          <h1>CART ({cart.items.length})</h1>
          <div onClick={remove} className={classes.remove}>Remove All</div>
        </div>
        <div className={classes.cartRows}>{cartItem}</div>
        <div className={classes["cartrow3"]}>
          <p>totall</p>
          <h1>$ {cart.price}</h1>
        </div>
        <Link to="/checkout" className={classes["cartbtn"]}>CHECKOUT</Link>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};
const Cart = (props) => {
  return (
    <>
      {props.modal && (
        <>
          <div className={classes["overlay"]} onClick={props.close} />
          <CartModal {...props} />
        </>
      )}
    </>
  );
};
export default Cart;
