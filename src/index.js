import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingDivider from './components/Headline/HeadingDivider/HeadingDivider';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadingDivider />
  </React.StrictMode> 
);