import './App.css';
import React, {useState} from "react"
import Logo from "Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"

const App = () => {

  const [total, setTotal] = useState([])

  const updateTotal = (item) => setTotal([...item])

  return (
    <>
      <Logo/>
      <Stock updateTotal={updateTotal}/>
      <Cart total={setTotal}/>
    </>
  );
}

export default App;
