import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBlogList from './components/Header/Header_BlogList/Header_BlogList';
import Loul from "./assets/pictures/loul.jpg"
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderBlogList imageSrc={Loul} subtitle="J'aime le couscous, la croziflette et les gnocchis" title="Loul le vrai OFF" />
  </React.StrictMode> 
);