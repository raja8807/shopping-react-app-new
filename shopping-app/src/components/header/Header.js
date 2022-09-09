import './Header.css'
import Cart from '../cart/cart';

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Header(props) {

    const [isLoggedin , setIsLoggedIN] = useState(false)

    useEffect(()=>{
        setInterval(()=>{
            setIsLoggedIN(localStorage.getItem("login"))
        },10)
    },[])

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
                        {isLoggedin=="true" && <Link to='/login' onClick={props.logout}>Logout</Link> }
                    </nav>
                    <Cart></Cart>
                </div>
            </div>
        </header>
    )
}

export default Header;