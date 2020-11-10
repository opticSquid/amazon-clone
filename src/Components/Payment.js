import React from "react";
import "../Stylesheets/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
// import axios from "../axios";
import { db } from "../firebase";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  // const stripe = useStripe();
  // const elements = useElements();
  // const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);
  // const [succeeded, setsucceeded] = useState(false);
  // const [processing, setProcessing] = useState("");
  // const [clientSecret, setClientSecret] = useState(true);
  //   useEffect(()=>{
  //       const getClientSecret = async () =>{
  //           const response = await axios({
  //               method: 'post',
  //               url: `payments/create?Total=${getBasketTotal(basket) * 100}`
  //           });
  //           setClientSecret(response.data.clientSecret);
  //       }
  //       getClientSecret();
  //   },[basket]);
  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   setProcessing(true);
  //   const payload = await stripe.confirmCardPayment(clientSecret,{
  //       payment_method:{
  //           card: elements.getElement(CardElement)
  //       }
  //   }).then(({paymentIntent})=>{
  //       db
  //         .collection('users')
  //         .doc(user?.uid)
  //         .collection('orders')
  //         .doc(paymentIntent.id)
  //         .set({
  //           basket: basket,
  //           amount: paymentIntent.amount,
  //           created: paymentIntent.created
  //         });
  //       setsucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       dispatch({
  //         type:  'EMPTY_BASKET'
  //       });
  //       history.replace('/orders');
  //   })
  // };
  // const handleChange = (event) => {
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  const clicknotpay = (event) => {
    event.preventDefault();
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(user.uid)
      .set({
        basket: basket,
        amount: getBasketTotal(basket)*100,
        created: new Date().toUTCString(),
      });
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/orders");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.ratings}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={clicknotpay}>
              {/* <CardElement onChange={handleChange} /> */}
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <p>
                      <strong>Order: {value}</strong>
                    </p>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                {/* <button disabled={processing||disabled||succeeded} >
                  <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                </button> */}
                <button type="submit">
                  <span>Buy Now</span>
                </button>
              </div>
              {/* {error && <div>{error}</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
