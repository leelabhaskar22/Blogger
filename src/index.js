import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CategoryProvider} from "../src/context/CategoryContext"
import { BookmarkProvider } from './context/BookMarkContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookmarkProvider>
       <CategoryProvider>
      <App />
    </CategoryProvider>
    </BookmarkProvider>
  </React.StrictMode>
);


