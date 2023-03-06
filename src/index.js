import React from 'react';
import ReactDOM from 'react-dom/client';
import TagList from "./components/Tag/TagList/TagList"
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TagList tags={["Cuisine", "Repas", "Loul"]} />
  </React.StrictMode>
);