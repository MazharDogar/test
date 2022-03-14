import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
