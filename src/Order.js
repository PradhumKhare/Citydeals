import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Order.css'
function Order({order}) {
    return (
        <div>
                <h2> Order </h2>

                {order.data.basket?.map(item =>
                <CheckoutProduct
                id = {item?.id}
                shopId = {item?.shopId}
                title = {item?.title} 
                image = {item?.image} 
                price = {item?.price} 
                rating = {item?.rating} 
                 />
                 )}
        </div>
    )
}

export default Order
