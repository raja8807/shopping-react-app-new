import './App.css';
import {Routes , Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Products from './components/Products/Products';
import Login from './components/login/login';
import CartScreen from './components/cart/cartScreen';

function App() {

  const [isLoggedin , setIsLoggedIN] = useState(false)

  useEffect(()=>{
    setIsLoggedIN(localStorage.getItem("login"))
  },[])

  function login(){
    localStorage.setItem("isLoggedIn" , true)
    setIsLoggedIN(true)
  }

  function logout(){
    localStorage.setItem("isLoggedIn" , false)
    setIsLoggedIN(false)
  }

  return (
    <div className="App">
      <Header logout={logout}></Header>
      <Routes>
        <Route index element={isLoggedin == "true" ? <Products></Products> : <Login login={login}></Login> }/>
        <Route path='cart' element={isLoggedin == "true" ? <CartScreen></CartScreen> : <Login login={login}></Login> }/>
        <Route path='login' element={<Login login={login}></Login>}/>
      </Routes>
    </div>
  );
}

export default App;