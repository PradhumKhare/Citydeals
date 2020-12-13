import React from 'react'
import { Link } from 'react-router-dom'

import './Shop.css'
function Shop({id ,title , image , address , sector  , rating}) {
    return (
        <div className='shop'>
            <div class="shop_info">
                <strong>{title}</strong>
                <p class="shop_price">
                    <small>{address}</small>
                    <bold>{sector}</bold>
                </p>
                <div class="shop_rating">
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
            <Link to={"./shopitems?id="+id}>
            <button>Visit Shop Items</button></Link>
        </div>
    )
}

export default Shop
