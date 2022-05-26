import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
);
