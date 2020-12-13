import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { db } from './firebase';
import Product from './Product'
import { useStateValue } from './StateProvider'


function ShopItems() {
    const [{user} , dispatch] = useStateValue() ;
    const [id,setId] = useState('') ;
    const [title,setTitle ] = useState('') ; 
    const [shopId,setShopId] = useState('') ;
    const [price,setPrice ] = useState('') ; 
    const [image,setImage] = useState('') ;
    const [rating,setRating ] = useState('') ; 
    // let { currentShopId } = useParams() ;

    const query = new URLSearchParams(useLocation().search);
    const currentShopId = query.get("id")
    

    const addToProduct = () => {
        db 
        .collection('users')
        .doc(user?.uid)
        .set({
            id : id , 
            product: {
                shopId : shopId , 
                id:id ,
                title :title ,
                image: image ,
                price : price ,
                rating : rating ,
            } 
        })
    }

    const addToProduct = () => {
        // console.log("ACTION");;
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

    return (
        <div class = "shopitems">
        <div class="shopitems_available">
            {
            products?.map(item =>{

                if(item.shopId == currentShopId )
                    return (
                    <CheckoutProduct
                    id = {item?.id}
                    shopId = {item?.shopId}
                    title = {item?.title} 
                    image = {item?.image} 
                    price = {item?.price} 
                    rating = {item?.rating} 
                    />
            )
                      
            }
            )
        }
        </div>
        <div classname = 'shopitems'>
            <div class="shopitems_addProduct">
            <input type="text"  onChange={e =>setShopId(e.target.value)} placeholder = "SHOP ID"/>
            <input type="text"  onChange={e =>setId(e.target.value)} placeholder = "PRODUCT ID"/>
            <input type="text"  onChange={e =>setTitle(e.target.value)} placeholder = "PRODUCT NAME"/>
            <input type="text"  onChange={e =>setPrice(e.target.value)} placeholder = "PRICE"/>
            <input type="text"  onChange={e =>setRating(e.target.value)} placeholder = "RATING"/>
            <input type="text"  onChange={e =>setImage(e.target.value)} placeholder = "IMAGE"/>
            <button onClick = {addToProduct} > ADD PRODUCT </button>
            </div>
        </div>
        </div>
    )
}

export default ShopItems
