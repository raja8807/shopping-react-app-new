import './Header.css'
import Cart from '../cart/cart';

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {useContext} from 'react'
import {AppContexts} from '../context'


function Header(props) {

    // const [isLoggedin , setIsLoggedin] = useState(props.isLoggedin)

    // // const isLoggedIn = useContext(UserContext);

    // useEffect(()=>{
    //     setIsLoggedin(props.isLoggedin)
    // },[props])

    const isLoggedIn = useContext(AppContexts).isLoggedin

    return (
        
        <header>
            <div className="container">
                <div className="headerWrapper">
                    <div className="logo">
                        <p>Logo.</p>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <a href='#'>SignUp</a>
                        {isLoggedIn && <Link to='/' onClick={props.logout}>Logout</Link> }
                    </nav>
                    {isLoggedIn && <Cart cartItems={props.cartItems}></Cart>}

                   
                </div>
            </div>
        </header>
    )
}

export default Header;