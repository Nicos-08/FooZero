import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation/Navigation/Navigation';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);