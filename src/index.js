import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogPostTitleAndExcerpt from './components/BlogArchive/BlogPostTitle+Excerpt/BlogPostTitle+Excerpt';
import "./styles/base/default.css"
import "./styles/base/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogPostTitleAndExcerpt title="Loul le vrai VS Loul le faux, le duel" subtitle="Ceci est un article fortement intéressant et il serait nécessaire que vous le lisiez !" />
  </React.StrictMode> 
);