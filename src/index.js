import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingLarge from './components/Headline/HeadingLarge/HeadingLarge';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadingLarge />
  </React.StrictMode> 
);