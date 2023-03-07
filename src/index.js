import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginationLoading from './components/Pagination/PaginationLoading/PaginationLoading';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationLoading />
  </React.StrictMode>
);