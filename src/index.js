import React from 'react';
import ReactDOM from 'react-dom/client';
import FilterItem from './components/Filter/FilterItem/FilterItem';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterItem />
  </React.StrictMode>
);