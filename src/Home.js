import React from 'react' ;
import "./Home.css" ;
import Product from './Product';
import Shop from './Shop' ;
function Home() {
    return (
        <div className = "home">
            <div class="home_container">
                <img class="home_image"  src="https://gilbertmendes.com/wp-content/uploads/2020/06/local-business-support-1590310772914.png" />
                <div class="home_row">
                    <Shop 
                    title = 'Agrawal General Strores'
                    id = "1"
                    image = './shop1.jpg'
                    address = 'Purani gali , guna '
                    sector = 'electronics'
                    rating = {3}
                    />
                    <Shop 
                    title = "WONDER PHOTO SHOP"
                    id = "2"
                    image = './shop2.jpg'
                    address = 'Purani gali , guna '
                    sector = 'electronics'
                    rating = {3}
                    />
                    <Shop 
                    title = 'TUCK SHOP'
                    id = "3"
                    image = './shop3.jpg'
                    address = 'Purani gali , guna '
                    sector = 'electronics'
                    rating = {3}
                    />
                     <Shop 
                    id = "4"
                    image = './shop4.jpg'
                    title = 'STOP AND SHOP'
                    address = 'Purani gali , guna'
                    sector = 'electronics'
                    rating = {3}
                    />
                    <Shop 
                    title = 'Agrawal General Strores'
                    id = "5"
                    image = './shop1.jpg'
                    address = 'Purani gali , guna '
                    sector = 'electronics'
                    rating = {3}
                    />
                </div>
                <div class="home_row">
                    <Product
                    id = {123}
                    shopId = {1}
                    image = './product1.jpg'
                    title = 'The Lean Book - Iphone DUMMY '
                    price = {25000}
                    rating = {3}
                    />
                    <Product
                    id = {1234}
                    shopId = {2}
                    image = './product2.jpg'
                    title = 'The Lean Book - Iphone DUMMY '
                    price = {25000}
                    rating = {3}
                    />
                    <Product
                    id = {12345}
                    shopId = {1}
                    image = './product3.jpg'
                    title = 'The Lean Book - Iphone DUMMY '
                    price = {25000}
                    rating = {3}
                    />
                    <Product
                    id = {123456}
                    shopId = {2}
                    image = './product4.jpg'
                    title = 'The Lean Book - Iphone DUMMY '
                    price = {25000}
                    rating = {3}
                    />
                    
                </div>
            </div>
        </div>
        
    )
}
export default Home
