import './Signup.css'

import {AppContexts} from '../context'
import {useContext} from 'react'
import {useState} from 'react'

function Signup() {

    let setUsers = useContext(AppContexts).setUsers
    let users = useContext(AppContexts).users

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // const [newUser , setNewUser] = useState({})
    let newUser = {}

    function userNameHandler(event) {
        setUserName(event.target.value)
    }

    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    function signupHandler(event) {
        event.preventDefault()
        
        if (password.length > 4) {
            if(password == event.target[2].value){
                newUser.userName = userName
                newUser.password = password
                setUsers((prev)=>{
                    return [...prev , newUser]
                })
                console.log(users);
            }
        } else {
            alert("6 chars")
        }
    }

    return (
        <div className='login'>
            <div className='container'>
                <div className='loginWrapper'>
                    <div className='loginBox'>
                        <h1>Signup</h1>
                        <form className="loginForm" onSubmit={signupHandler}>
                            <input type={'text'} placeholder="Username" onChange={userNameHandler}/>
                            <input type={'password'} className="signUpPwd" onChange={passwordHandler} placeholder='Password' />
                            <input type={'password'} placeholder='Confirm Password' /><br />
                            <input type={'submit'} className="signUpBtn" value={'Signup'} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;