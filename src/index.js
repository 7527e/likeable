import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="expenses" element={<Expenses />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here!</p>
              <Link to="/">Back to Home?</Link>
            </main>
          }
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
