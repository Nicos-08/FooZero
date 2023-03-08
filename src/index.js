import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadlineHero from './components/Headline/HeadlineHero/HeadlineHero';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadlineHero />
  </React.StrictMode>
);