import './App.css';
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Products from './components/Products/Products';
import Login from './components/login/login';
import CartScreen from './components/cart/cartScreen';


function App() {


  const [isLoggedin, setIsLoggedIN] = useState(false)
  const [added, setAdded] = useState([])

  // useEffect(()=>{
  //   setIsLoggedIN(localStorage.getItem("login"))
  // },[])

  function login() {
    // localStorage.setItem("isLoggedIn" , true)
    // alert("ok")
    setIsLoggedIN(true)
  }

  function logout() {
    // localStorage.setItem("isLoggedIn" , false)
    setIsLoggedIN(false)
  }

  function addToCart(item) {
    console.log(item);
    // alert('ok')
    setAdded((prevList) => {
      return [...prevList, item]
    })
    // console.log(added);
  }

  function removeItem(id) {
    let list = []
    let index = 0
    for (let i = 0; i < added.length; i++) {
      if (added[i].id != id) {
        list[index] = added[i]
        index++
      }
    }
    console.log(list);
    setAdded(list)
    // console.log(id);
  }


  return (
    <div className="App">
        <Header logout={logout} isLoggedin={isLoggedin} added={added}></Header>
        <Routes>
          <Route index element={isLoggedin == true ? <Products add={addToCart}></Products> : <Login login={login}></Login>} />
          <Route path='cart' element={isLoggedin == true ? <CartScreen added={added} remove={removeItem}></CartScreen> : <Login login={login}></Login>} />
          <Route path='login' element={<Login login={login}></Login>} />
        </Routes>
      </div>
  );
}

export default App;