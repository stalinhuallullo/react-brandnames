import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrandNamesApp} from "./BrandNamesApp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrandNamesApp />
  </React.StrictMode>
);

