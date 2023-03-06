import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "../src/components/Button/Button";
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);