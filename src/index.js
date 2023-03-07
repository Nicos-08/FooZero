import React from 'react';
import ReactDOM from 'react-dom/client';
import FilterList from './components/Filter/FilterList/FilterList';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterList filterItems={[{itemName: "loul", dashed:false}]} />
  </React.StrictMode>
);