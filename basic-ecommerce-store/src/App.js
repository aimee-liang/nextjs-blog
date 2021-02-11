import './App.css';
import React, {useState} from "react"
import Logo from "Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"

const App = () => {

  const [total, setTotal] = useState([]) /* should this be an object and not an array? */

  const updateTotal = (item) => setTotal([...item]) /* have count included? */

  return (
    <>
      <Logo/>
      <Stock updateTotal={updateTotal}/>
      <Cart cartTotal={setTotal}/>
    </>
  );
}

export default App;
