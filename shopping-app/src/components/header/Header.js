import './Header.css'
import Cart from '../cart/cart';

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";



function Header(props) {

    const [isLoggedin , setIsLoggedIN] = useState(props.isLoggedin)

    // const isLoggedIn = useContext(UserContext);

    useEffect(()=>{
        setIsLoggedIN(props.isLoggedin)
    },[props])

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
                        {isLoggedin && <Link to='/' onClick={props.logout}>Logout</Link> }
                    </nav>
                    {isLoggedin && <Cart added={props.added}></Cart>}

                   
                </div>
            </div>
        </header>
    )
}

export default Header;