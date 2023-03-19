import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogMetaDataSmall from './components/BlogArchive/BlogMetaDataSmall/BlogMetaDataSmall';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogMetaDataSmall author={{authorName: "Nicos", authorFirstName: "Franzettio"}} comments={9} date={{month: "November", year: 2006, number: 12}} time={{hour: "06:05", morning: true}} />
  </React.StrictMode> 
);