import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <App />
    </Router>
  </React.StrictMode>
);

