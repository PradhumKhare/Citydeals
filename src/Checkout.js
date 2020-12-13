import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket} , dispatch] = useStateValue() ;
    return (
        <div className='checkout'>
            <div class="checkout_left">
                <img className = 'checkout_ad' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQ9Ts4TxEg90KxsKXH6003Pj6h2L0cqv_yg&usqp=CAU" />
                <h2 class="checkout_title">
                    Your Shopping Basket 
                </h2>
                <div class="checkout_items">
                    <div class="checkout_item">
                    {
                        basket?.map(item => (
                            <CheckoutProduct
                            id = {item?.id}
                            shopId = {item?.shopId}
                            title = {item?.title} 
                            image = {item?.image} 
                            price = {item?.price} 
                            rating = {item?.rating} 
                             />
                        ))
                    }
                    </div>
                </div>
            </div>
            <div class="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
