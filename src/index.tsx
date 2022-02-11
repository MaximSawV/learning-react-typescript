import React from 'react';
import { render } from "react-dom";
import App from './domain/app';
import './../src/style-sheets/stylesheet.css';

const rootElement = document.getElementById("app");
render(<App />, rootElement);