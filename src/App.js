
import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home';
import TransactionManagement from './components/TransactionManagement';
import StockManagement from "./components/StockManagement";
function App() {
  const [products, setProducts] = useState([]);

  
  return (
    <Tabs
      defaultActiveKey="products"
      id="justify-tab-example"
      className="p-3 mb-2 bg-light text-dark fs-5"
      justify
      variant='pills'
    >
      <Tab eventKey="products" title="Product Management">
        <Home
        products = {products}
        setProducts = {setProducts}
        />
      </Tab>
      <Tab eventKey="transaction" title="Transaction Management">
        <TransactionManagement products = {products}
        setProducts = {setProducts}/>
      </Tab>
      <Tab eventKey="Stock" title="Stock Management">
        <StockManagement
        products = {products}
        Input={Input}
        
        />
      </Tab>
      <Tab eventKey="report" title="Report">
        Component san report
      </Tab>
    </Tabs>
  );
}
const Input = {
  width: "100%",
  padding: "10px",
  margin: "5px 0 22px 0",
  display: "inlineBlock",
  border: "none",
  background: "#f7f7f7",
  fontFamily: "Montserrat,Arial, Helvetica, sans-serif"
}

export default App;
