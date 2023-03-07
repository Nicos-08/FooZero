import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginationDefault from './components/Pagination/PaginationDefault/PaginationDefault';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationDefault pages={[4, 5, 6, 7]} />
  </React.StrictMode>
);