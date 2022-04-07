import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
