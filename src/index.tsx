import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import App from './components/app';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const rootElement = document.getElementById("app");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);