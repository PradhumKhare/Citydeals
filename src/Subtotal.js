import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getbasketTotal } from './reducer';
import {db} from './firebase.js'
import { Link } from 'react-router-dom';
function Subtotal() {
    const [{basket , user } , dispatch ] = useStateValue() ; 
    const handleCheckout = () => {
        db 
        .collection('users')
        .doc(user?.uid)
        .set({
            basket:basket,
        })
    }
    return (
        <div class="subtotal">
            <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal( {basket.length} items ) : <strong> {value} </strong>
                    </p>
                    <small className = "subtotal_gift">
                        <input type="checkbox" /> 
                        <bold>This is a Gift</bold>
                    </small>
                </>
            )}
            decimalScale = {2} 
            value = {getbasketTotal(basket)}
            displayType = {"text"}
            thousandSepratoe = {true}
            prefix = {"₹"}
            />
        <Link to = "/orders">
        <button onClick = {handleCheckout} >Proceed To Checkout</button>
        </Link>
        </div>
    )
}

export default Subtotal
