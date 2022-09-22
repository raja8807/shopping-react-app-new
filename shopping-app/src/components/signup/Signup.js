import './Signup.css'

import { AppContexts } from '../context'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'


function Signup() {

    let setUsers = useContext(AppContexts).setUsers
    // let users = useContext(AppContexts).users

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // const [newUser , setNewUser] = useState({})
    // let newUser = {}

    function userNameHandler(event) {
        setUserName(event.target.value)
    }

    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    function signupHandler(event) {
        event.preventDefault()

        if (password.length > 4) {
            let newUser = {}
            if (password == event.target[2].value) {
                newUser.userName = userName
                newUser.password = password
                // setUsers((prev)=>{
                //     alert(userName + " signup sucessfull")
                //     return [...prev , newUser]
                // })
                fetch('https://63106c3b826b98071a410ecf.mockapi.io/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                }).then((x) => {
                    if (x.ok) {
                        alert(newUser.userName + " Signup Successful")
                    } else {
                        alert("Sorry something went wrong")
                    }
                })
            } else {
                alert("password doesn't match")
            }
        } else {
            alert("password requires atleast 6 caharacters")
        }
        event.target[0].value = ""
        event.target[1].value = ""
        event.target[2].value = ""
    }

    return (
        <div className='login'>
            <div className='container'>
                <div className='loginWrapper'>
                    <div className='loginBox'>
                        <h1>SignUp</h1>
                        <form className="loginForm" onSubmit={signupHandler}>
                            <input type={'text'} placeholder="Username" onChange={userNameHandler} />
                            <input type={'password'} className="signUpPwd" onChange={passwordHandler} placeholder='Password' />
                            <input type={'password'} placeholder='Confirm Password' /><br />
                            <input type={'submit'} className="signUpBtn" value={'Signup'} />
                        </form>
                        <br/>
                        <p className='needaccount'>Already have an account?<span><Link className='signupLink' to={'/login'}>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;