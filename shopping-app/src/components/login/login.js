import './login.css'

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login(props) {
    let navigateTo = useNavigate()

    const[chkField , setChk] = useState("input")

    function loginHandler(event){
        event.preventDefault()
        // alert("ok")
        if(event.target[0].value == "x"){
        navigateTo("/")
        props.login()
        }else{
            event.target[0].value = ""
            event.target[1].value = ""
            setChk("input wrong")
        }
    }

    return (
        <div className='login'>
            <div className='container'>
                <div className='loginWrapper'>
                    <div className='loginBox'>
                        <h1>Login</h1>
                        <form onSubmit={loginHandler}>
                            <input type="text" className={chkField} placeholder='username'/>
                            <input type={"password"} placeholder='password' className={chkField}/> <br/>
                            <input type={"submit"} value='Login'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;