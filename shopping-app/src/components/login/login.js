import './login.css'

import { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

import { useState } from 'react';

function Login(props) {

    let navigateTo = useNavigate()
    // let users = useContext(AppContexts).users
    // let setUsers = useContext(AppContexts).setUsers
    const [chkField, setChk] = useState("input")
    const [pwdType, setPwdType] = useState("password")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://63106c3b826b98071a410ecf.mockapi.io/users').then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((users) => {
            setUsers([...users])
        })
    }, [])

    function userNameHandler(event) {
        setUserName(event.target.value)
    }

    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    function loginHandler(event) {
        // alert("ok")
        event.preventDefault()
        let thisUser = users.find((user) => {
            return user.userName == userName
        })
        if (thisUser) {
            if (thisUser.password == password) {
                navigateTo('/')
                props.login(userName)
            }
        } else {
            setChk("input wrong")
            setUserName("")
            setPassword("")
        }
    }

    function tooglePwd() {
        if (pwdType == "password") {
            setPwdType("text")
        } else {
            setPwdType("password")
        }
    }

    return (
        <div className='login'>
            <div className='container'>
                <div className='loginWrapper'>
                    <div className='loginBox'>
                        <h1>Login</h1>
                        <form onSubmit={loginHandler} className="loginForm">
                            <input type="text" className={chkField} id="usernameInput" placeholder='username' value={userName} onChange={userNameHandler} />
                            <input type={pwdType} placeholder='password' id="passwordInput" className={chkField} value={password} onChange={passwordHandler} />
                            <div className='eye' onClick={tooglePwd}><i className={pwdType == "text" ? "fa fa-eye-slash" : "fa fa-eye"}></i></div> <br />
                            <input type={"submit"} value='Login' id='loginBtn' />

                        </form>
                        <br />
                        <p className='needaccount'>Need an account? <span><Link className='signupLink' to={'/signup'}>SignUp</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;