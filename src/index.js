import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginationDefaultItem from './components/Pagination/PaginationDefaultItem/PaginationDefaultItem';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationDefaultItem page="loul" />
  </React.StrictMode>
);