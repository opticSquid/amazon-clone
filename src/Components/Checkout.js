import React from "react";
import "../Stylesheets/Checkout.css";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout =() =>
{
    const [{basket,user}] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon-ad" className="checkout__ad"/>
            {basket?.length === 0 ? (
                <div>
                    <h3>{user?.email}</h3>
                    <h2>Your Basket is Empty</h2>
                    <p className="checkout__title">You have no items in your basket.To buy one or "Add to Basket" next to the item.</p>
                </div>
            ):(
                <div>
                    <h3>{user.email}</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map((item)=>(
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.ratings}
                        />
                    ))}
                </div>
                )}
            </div>
            {basket.length >0 &&(
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )
            }
        </div>
    )
}
export default Checkout;