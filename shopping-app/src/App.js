import './App.css';
import {Routes , Route, Link} from 'react-router-dom'

import Header from './components/header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;