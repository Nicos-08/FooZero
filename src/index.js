import React from 'react';
import ReactDOM from 'react-dom/client';
import NavOpen from './components/Navigation/Button/NavOpen/NavOpen';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavOpen />
  </React.StrictMode>
);