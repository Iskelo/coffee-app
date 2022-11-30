import React from 'react';
import './App.scss';
import Home from '../pages/home/homeApp/homeApp';
import CoffeeApp from "../pages/ourCoffee/ourCoffeeApp/coffeeApp";
import PleasureApp from '../pages/forYourPleasure/pleasureApp/pleasureApp';
import Product from '../pages/products/product/product';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/layout';



export default function App(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='coffee' element={<CoffeeApp />} />
          <Route path='pleasure' element={<PleasureApp />} />
          <Route path='product' element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


