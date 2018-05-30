import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

//
// ─── RENDER THE APP IN THE INDEX.HTML FILE ────────────────────────────────────
//

    
ReactDOM.render(
    <BrowserRouter>        
        <App />
    </BrowserRouter>
    , document.getElementById('app'));