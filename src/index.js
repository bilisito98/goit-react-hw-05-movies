import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import 'modern-normalize/modern-normalize.css'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/goit-react-hw-05-movies/">
            <App/>
        </BrowserRouter>
    </StrictMode>
);
