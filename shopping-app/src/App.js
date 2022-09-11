import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { AppContexts } from './components/context';

import Header from './components/header/Header';
import Products from './components/Products/Products';
import Login from './components/login/login';
import CartScreen from './components/cart/cartScreen';


function App() {

  const [isLoggedin, setIsLoggedin] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedin(true)
    } else if (sessionStorage.getItem("isLoggedIn") === "false") {
      setIsLoggedin(false)
    }

    let cart = JSON.parse(sessionStorage.getItem("cart"))

    if (sessionStorage.getItem("cart")) {
      setCartItems([...cart])
    }
    // console.log(sessionStorage.getItem("login"));
  }, [])

  function login() {
    sessionStorage.setItem("isLoggedIn", "true")
    setIsLoggedin(true)
  }

  function logout() {
    sessionStorage.setItem("isLoggedIn", "false")
    setIsLoggedin(false)
  }

  function addToCart(newItem) {
    setCartItems((prevList) => {
      for (let item of cartItems) {
        if (newItem.id == item.id) {
          return prevList
        }
      }
      let newCartItems = [...prevList, newItem]
      sessionStorage.setItem("cart", JSON.stringify(newCartItems))
      return newCartItems
    })
  }

  function removeItem(id) {
    let newCartItems = []
    let index = 0
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id != id) {
        newCartItems[index] = cartItems[i]
        index++
      }
    }
    // console.log(list);
    sessionStorage.setItem("cart", JSON.stringify([...newCartItems]))
    setCartItems(newCartItems)
    // console.log(id);
  }


  return (
    <div className="App">
      <AppContexts.Provider value={{ isLoggedin, addToCart, cartItems }}>
        <Header logout={logout}></Header>
        <Routes>
          <Route index element={isLoggedin == true ? <Products></Products> : <Login login={login}></Login>} />
          <Route path='cart' element={isLoggedin == true ? <CartScreen remove={removeItem}></CartScreen> : <Login login={login}></Login>} />
          <Route path='login' element={<Login login={login}></Login>} />
        </Routes>
      </AppContexts.Provider>
    </div>
  );
}

export default App;