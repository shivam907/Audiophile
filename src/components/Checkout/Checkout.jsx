import React from "react";
import classes from "./Checkout.module.css";
import img from "../../Images/cart/image-xx99-mark-two-headphones.jpg";
import Payment from "../Modals/Payment";
import data from "../../Data/products.json"
import { useSelector } from "react-redux";
const Checkout = () => {
  const cart = useSelector(state=>state.cart)
  const [cartItem, setCartItem] = React.useState()
  const [pay, setPay] = React.useState(false);
  const sett = () => {
    setPay(true);
  };
  const resett = () => {
    setPay(false);
  };
  React.useEffect(()=>{
    let arr=[]
    cart.items.forEach(item=>{
      data.products.forEach(i=>{
        if(i.shortName==item.text){
          arr.push(
            <div className={classes["cartrow2"]}>
              <div className={classes["c1"]}>
                <img src={i.cartImage} alt="" />
                <div className={classes["card"]}>
                  <h1>{i.shortName}</h1>
                  <span className={classes["pricec"]}>$ {i.price}</span>
                </div>
              </div>
              <span className={classes["xx"]}>x {item.quantity}</span>
            </div>
          );
        }
      })
    })
    setCartItem(arr)
  },[cart])
  return (
    <>
      <Payment modal={pay} open={sett} close={resett} />
      <div className={classes["body"]}>
        <div className={classes["checkout"]}>
          <div className={classes["back"]}>
            <h2 className={classes["chaljaa"]}>Go Back</h2>
          </div>
          <div className={classes["checkbox"]}>
            <div className={classes["chbox1"]}>
              <h1>checkout</h1>
              <div className={classes["bill"]}>
                <h1>billing details</h1>
                <div className={classes["billing"]}>
                  <div className={classes["bill1"]}>
                    <p>Name</p>

                    <input type="text" placeholder="Shivam Kaushal" />
                  </div>
                  <div className={classes["bill1"]}>
                    <p>Email Address</p>

                    <input type="email" placeholder="shivam@syncu.me" />
                  </div>
                  <div className={classes["bill1"]}>
                    <p>Phone Number</p>

                    <input type="tel" placeholder="+91 8968969929" />
                  </div>
                </div>
              </div>
              <div className={classes["bill"]}>
                <h1>shipping info</h1>
                <div className={classes["billing2"]}>
                  <div className={classes["bill1"]}>
                    <p>Your Address</p>

                    <input type="text" placeholder="655 Vakillan Bazar" />
                  </div>
                  <div className={classes["billi"]}>
                    <div className={classes["bill1"]}>
                      <p>Zip Code</p>

                      <input type="number" placeholder="146001" />
                    </div>
                    <div className={classes["bill1"]}>
                      <p>City</p>

                      <input type="text" placeholder="Hoshiarpur" />
                    </div>
                  </div>
                  <div className={classes["billi"]}>
                    <div className={classes["bill1"]}>
                      <p>State</p>

                      <input type="text" placeholder="Punjab" />
                    </div>
                    <div className={classes["bill1"]}>
                      <p>Country</p>

                      <input type="text" placeholder="India" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes["bill"]}>
                <h1>payment details</h1>
                <div className={classes["billing2"]}>
                  <div className={classes["bol"]}>
                    <div className={classes["bill2"]}>
                      <p>Payment Method</p>
                    </div>
                    <div className={classes["billi2"]}>
                      <div className={classes["bool"]}>
                        <input type="radio" placeholder="e-Money" />
                        <h1>e-Money</h1>
                      </div>
                      <div className={classes["bool"]}>
                        <input type="radio" placeholder="Cash on Delivery" />
                        <h1>Cash on Delivery</h1>
                      </div>
                    </div>
                  </div>
                  <div className={classes["billi"]}>
                    <div className={classes["bill1"]}>
                      <p>e-Money Number</p>

                      <input type="number" placeholder="12345678" />
                    </div>
                    <div className={classes["bill1"]}>
                      <p>e-Money Pin</p>

                      <input type="number" placeholder="1234" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes["chbox2"]}>
              <div className={classes["cart"]}>
                <div className={classes["cartContent"]}>
                  <div className={classes["cartrow1"]}>
                    <h1>SUMMARY</h1>
                  </div>
                  <div className={classes.cartRows}>
                  {cartItem}
                  </div>
                  <div className={classes["cr2"]}>
                    <div className={classes["cr3"]}>
                      <p>totall</p>
                      <h1>$ {cart.price}</h1>
                    </div>

                    <div className={classes["cr3"]}>
                      <p>shipping</p>
                      <h1>$ 50</h1>
                    </div>
                  </div>
                  <div className={classes["cr3"]}>
                    <p>grand totall</p>
                    <h1 className={classes["grand"]}>$ {cart.price+50}</h1>
                  </div>
                  <div className={classes["cartbtn"]} onClick={sett}>
                    CONTINUE & PAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
