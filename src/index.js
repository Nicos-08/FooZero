import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogCategory from './components/BlogArchive/BlogCategory/BlogCategory';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogCategory categoryName="L'aestheticité" />
  </React.StrictMode> 
);