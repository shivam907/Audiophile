import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";
import data from "../../Data/products.json"
import img from "../..//Images/cart/image-xx99-mark-two-headphones.jpg";
const CartModal = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)
  const [cartItem, setCartItem] = React.useState()
  const [price, setPrice]=React.useState(0)
  const [quantity, setQuantity] = React.useState(0);
  const plusHandler = () => {
    setQuantity((prev) => prev + 1);
  };
  const minusHandler = () => {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
  };
  React.useEffect(()=>{
  let arr=[]
  let price=0;
  cart.items.forEach(item=>{
    data.products.forEach(i=>{
      if(i.name==item.text){
        console.log(i)
        setQuantity(item.quantity);
        setPrice(prev=>prev+i.price*item.quantity)
        arr.push(
          <div className={classes["cartrow2"]}>
            <div className={classes["c1"]}>
              <img src={i.cartImage} alt="" />
              <div className={classes["card"]}>
                <h1>{i.name}</h1>
                <span className={classes["pricec"]}>$ {item.price}</span>
              </div>
            </div>
            <div className={classes["quantity"]}>
              <div
                className={classes["plus"]}
                onClick={() =>
                  dispatch(
                    addItem({
                      name: i.name,
                      quantity: 1,
                    })
                  )
                }
              >
                +
              </div>
              <div className={classes["quantityNumber"]}>{item.quantity}</div>
              <div className={classes["minus"]} onClick={() =>
                  dispatch(
                    addItem({
                      name: i.name,
                      quantity: -1,
                    })
                  )
                }>
                -
              </div>
            </div>
          </div>
        );
      }
    })
  })
  if (cart.items.length == 0) {
    arr.push(<p className={classes.empty}>Your cart is empty</p>);
  }
  setCartItem(arr);
  },[cart,dispatch])
  let content = (
    <div className={classes["cart"]}>
      <div className={classes["cartContent"]}>
        <div className={classes["cartrow1"]}>
          <h1>CART ({cart.length})</h1>
          <div className={classes.remove}>Remove All</div>
        </div>
        <div className={classes.cartRows}>{cartItem}</div>
        <div className={classes["cartrow3"]}>
          <p>totall</p>
          <h1>$ {cart.price}</h1>
        </div>
        <div className={classes["cartbtn"]}>CHECKOUT</div>
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
