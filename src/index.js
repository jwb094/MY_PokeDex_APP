import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pokemon from './components/Pokemon';
import Wishlist from './components/Wishlist';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>

    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/pokemon/:name" element={<Pokemon/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();