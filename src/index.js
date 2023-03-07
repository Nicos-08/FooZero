import React from 'react';
import ReactDOM from 'react-dom/client';
import NavClose from './components/Navigation/Button/NavClose/NavClose';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavClose />
  </React.StrictMode>
);