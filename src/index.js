import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pokemon from './components/Pokemon';
import wishlist from './components/wishlist';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>

    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/pokemon/:name" element={<Pokemon add={wishlist.add}/>}/>
        <Route path="/wishlist" element={<wishlist/>}/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();