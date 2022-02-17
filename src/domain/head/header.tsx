import React from 'react';
import  {css} from '@emotion/css';

export default function Header() {

    return(
        <div className={css`
            width: 100%;
            height: 5%;
            background: white;
            display: flex;
            align-items: center;
            font-size: 2em;
            position: fixed;
            left: 0;
            top: 0;

            & > h1 {
                margin: 0;
            }

        `}>
            <a href="/">
                <img src={require("../../images/financio-Logo.png")} alt="logo" className={css`height: 66px`}/>
            </a>
            <h1>Daitemo</h1>
        </div>
    )
}