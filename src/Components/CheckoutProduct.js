import React from "react";
import "../Stylesheets/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import yellow from "@material-ui/core/colors/yellow";
import {useStateValue} from "../StateProvider";

const CheckoutProduct = ({id,title,image,price,rating}) =>
{
    const [,dispatch] = useStateValue();
    const removeFromBasket = () =>
    {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    return(
        <div className="checkoutProduct" id={id}>
            <img src={image} alt={title}  className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title" >{title}</p>
                <p className="checkoutProduct__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((star)=><p><StarIcon style={{ color: yellow[500] }}/></p>)
                }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}
export default CheckoutProduct;