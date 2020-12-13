import React from 'react'
import './Product.css';
import ReactStars from "react-rating-stars-component";
import { useStateValue } from './StateProvider'
function Product({id , shopId , title , image ,price , rating}) {
    const [{basket} , dispatch ] = useStateValue() ;
    console.log("this is the basket >>> ",basket)
    const addToBasket = () => {
            // dispatch item to  the data layer 
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    shopId : shopId ,
                    id:id ,
                    title :title ,
                    image: image ,
                    price : price ,
                    rating : rating ,
                },
            });
            dispatch({
                type: 'ADD_TO_PRODUCT',
                item: {
                    shopId : shopId , 
                    id:id ,
                    title :title ,
                    image: image ,
                    price : price ,
                    rating : rating ,
                },
            });
    };
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='product'>
            <div class="product_info">
                <p>{title}</p>
                <p class="product_price">
                    <small>₹
                    <strong> {price}</strong>
                    </small>
                </p>
                <div class="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐</p>
                    ))
                }
                </div>    
            </div>
            <img src= {image} />
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            <button onClick = {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
