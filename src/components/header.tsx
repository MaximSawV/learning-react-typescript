import React, { Component } from 'react';
import './../style-sheets/stylesheet.css';
import  {css} from '@emotion/react';

export default function Header() {

    return(
        <div className={css `
            width: 100%;
            height: 100px;
            background: #373737;
            color: lime;
            display: flex;
            align-items: center;
            font-size: 3em;
        `}>
            <a href="/" className="logo">
                <img src={require("../images/financio-Logo.png")} alt="logo"/>
            </a>
            <h1>Daitemo</h1>
        </div>
    )
}