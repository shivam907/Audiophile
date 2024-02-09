import React from "react";
import classes from "./Checkout.module.css";
import Payment from "../Modals/Payment";
import data from "../../Data/products.json"
import Input from "../Input/Input";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cart = useSelector(state=>state.cart)
  const [cartItem, setCartItem] = React.useState()
  const [pay, setPay] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const name = React.useRef();
  const email = React.useRef();
  const number = React.useRef();
  const address = React.useRef();
  const zip = React.useRef();
  const city = React.useRef();
  const state = React.useRef();
  const country = React.useRef();
  const money = React.useRef();
  const pin = React.useRef();
  const sett = () => {
    console.log(name.current.value.length);
    // setPay(true);
  };
  const resett = () => {
    setPay(false);
  };
  React.useEffect(()=>{
    let arr=[]
    cart.items.forEach(item=>{
      data.products.forEach(i=>{
        if(i.shortName===item.text){
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
                  <Input
                    label="Name"
                    reff={name}
                    type="text"
                    placeholder="Shivam kaushal"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="shivamkaushal907@gmail.com"
                    reff={email}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 9999999999"
                    reff={number}
                  />
                </div>
              </div>
              <div className={classes["bill"]}>
                <h1>shipping info</h1>
                <div className={classes["billing2"]}>
                  <Input
                    label="Your Adress"
                    type="text"
                    placeholder="111 Model Town"
                    reff={address}
                  />
                  <div className={classes["billi"]}>
                    <Input
                      label="Zip Code"
                      type="number"
                      placeholder="146001"
                      reff={zip}
                    />
                    <Input
                      label="City"
                      type="text"
                      placeholder="Hoshiarpur"
                      reff={city}
                    />
                  </div>
                  <div className={classes["billi"]}>
                    <Input
                      label="State"
                      type="text"
                      placeholder="Punjab"
                      reff={state}
                    />
                    <Input
                      label="Country"
                      type="text"
                      placeholder="India"
                      reff={country}
                    />
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
                    <form className={classes["billi2"]}>
                      <div className={classes["bool"]}>
                        <input
                          checked
                          onClick={() => setSelected(0)}
                          name="A"
                          type="radio"
                          placeholder="e-Money"
                        />
                        <h1>e-Money</h1>
                      </div>
                      <div className={classes["bool"]}>
                        <input
                          onClick={() => setSelected(1)}
                          name="A"
                          type="radio"
                          placeholder="Cash on Delivery"
                        />
                        <h1>Cash on Delivery</h1>
                      </div>
                    </form>
                  </div>
                  {selected == 0 ? (
                    <div className={classes["billi"]}>

                      <Input label="e-Money Number" type="number" placeholder="12345678" reff={money} />
                      <Input label="e-Money Pin" type="number" placeholder="1234" reff={pin} />

                    </div>
                  ) : (
                    <div className={classes.cod}>
                      <img
                        src="../../Images/shared/desktop/payment.svg"
                        alt=""
                      />
                      <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes["chbox2"]}>
              <div className={classes["cart"]}>
                <div className={classes["cartContent"]}>
                  <div className={classes["cartrow1"]}>
                    <h1>SUMMARY</h1>
                  </div>
                  <div className={classes.cartRows}>{cartItem}</div>
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
                    <h1 className={classes["grand"]}>$ {cart.price + 50}</h1>
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
