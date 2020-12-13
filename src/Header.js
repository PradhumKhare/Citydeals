import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ {basket , user} , dispatch ] = useStateValue() ;
    const handleAuthentication = () => {
        if(user){
            auth.signOut() ;
        }
    }
    return (
        <div className='header'>
            
                <Link to="/" className='header_logo'>
                    <h1 className='header_logo'>
                        CITYDEALS
                    </h1>
                </Link>
                
            <div class="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className = 'header_searchIcon' />
            </div>
            <div class="header_nav">
                <div class="header_option">
                    <span className = "header_optionLineOne" >
                        Hello {user? user?.email : 'Guest'}  
                    </span>
                    <Link to="/login">
                    <span onClick = {handleAuthentication} className = "header_optionLineTwo" >
                        {user? 'Sign-out':  'Sign-in'}
                    </span>
                    </Link>
                </div>
                <div class="header_option">
                    <span className = "header_optionLineOne" >
                        Returns 
                    </span>
                    <span className = "header_optionLineTwo" >
                        Orders 
                    </span>
                </div>
                <div class="header_option">
                    <span className = "header_optionLineOne" >
                        Your    
                    </span>
                    <span className = "header_optionLineTwo" >
                        Prime
                    </span>
                </div>
                <Link to = '/checkout'>
                    <div class="header_optionBasket">
                        <LocalMallIcon/>
                        <span class="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
