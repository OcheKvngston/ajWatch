import React from 'react';
import Header from './component/header/Header.js';
import Landing from './component/pages/landing/Landing.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Product from './component/pages/product/Product.js';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 

