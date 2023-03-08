import React from 'react';
import ReactDOM from 'react-dom/client';
import NavItem from './components/Navigation/NavItem/NavItem';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavItem />
  </React.StrictMode>
);