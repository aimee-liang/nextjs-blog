import './App.css';
import React, {useState} from "react"
import Logo from "Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"

function App() {

  const [total, setTotal] = useState([])
  
  return (
    <>
      <Logo/>
      <Stock/>
      <Cart/>
    </>
  );
}

export default App;
