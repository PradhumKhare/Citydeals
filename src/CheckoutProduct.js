import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
export default function CheckoutProduct({id , shopId, image , title , price , rating }) {
    
    const [{basket} , dispatch] = useStateValue() ;

    
    const removeFromBasket = ()  => {
            dispatch({
                type : "REMOVE_FROM_BASKET" ,
                id : id 
            })
    }
    
    
    
    
    return (
        <div className = 'checkoutproduct'> 
            <img className = 'checkoutProduct_image' src = {image} />

            <div class="checkoutproduct_info">
                <p class="checkoutproduct_title">{title}</p>
                <p class = "checkoutproduct_price">
                    <small>₹
                    <strong>{price}</strong>
                    </small>
                </p>
                <div class="checkoutproduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
