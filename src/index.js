import React from 'react';
import ReactDOM from 'react-dom/client';
import IconBox from './components/IconBox/IconBox';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IconBox icon="arrow-right" subtitle="J'aime le couscous bien cuit !" title="L'histoire de loul" />
  </React.StrictMode> 
);