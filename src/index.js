import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogReadMore from './components/BlogArchive/BlogReadMore/BlogReadMore';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogReadMore />
  </React.StrictMode> 
);