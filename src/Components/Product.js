import React from "react";
import "../Stylesheets/Product.css";
import StarIcon  from "@material-ui/icons/Star";
import yellow from "@material-ui/core/colors/yellow";
import {useStateValue} from "../StateProvider";
const Product = ({id,title,price,ratings,image}) =>
{
    const [,dispatch] = useStateValue();
    const addToBasket = () =>(
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                ratings: ratings
            }
        })
    )
    return(
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>&#x20B9;</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(ratings).fill().map((star)=><p><StarIcon style={{ color: yellow[500] }}/></p>)
                }
                </div>
            </div>
            <img src={image} alt={title}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}
export default Product;