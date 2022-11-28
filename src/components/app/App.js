import React from 'react';
import './App.scss';
import Home from '../pages/home/homeApp/homeApp';
import CoffeeApp from "../pages/ourCoffee/ourCoffeeApp/coffeeApp";
import PleasureApp from '../pages/forYourPleasure/pleasureApp/pleasureApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/layout';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='coffee' element={<CoffeeApp />} />
          <Route path='pleasure' element={<PleasureApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


