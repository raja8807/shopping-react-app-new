import './Header.css'
import Cart from '../cart/cart';

import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { AppContexts } from '../context'



function Header(props) {

    // const [isLoggedin , setIsLoggedin] = useState(props.isLoggedin)

    // // const isLoggedIn = useContext(UserContext); 
    // useEffect(()=>{
    //     setIsLoggedin(props.isLoggedin)
    // },[props])

    const isLoggedIn = useContext(AppContexts).isLoggedin
    const currentUser = useContext(AppContexts).currentUser

    return (

        <header>
            <div className="container">
                <div className="headerWrapper">
                    <div className="logo">
                        <p>{"Hi "+currentUser}</p>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to='/signup'>Signup</Link>
                        {isLoggedIn && <Link to='/' onClick={props.logout}>Logout</Link>}
                        {/* <i class="fa fa-twitter"></i> */}
                    </nav>
                    {isLoggedIn && <Cart cartItems={props.cartItems}></Cart>}
                </div>
            </div>
        </header>
    )
}

export default Header;