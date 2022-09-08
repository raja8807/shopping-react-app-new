import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="headerWrapper">
                    <div className="logo">
                        <p>Logo.</p>
                    </div>
                    <nav>
                        <a href='#'>SignUp</a>
                        <a href='#'>Login</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;