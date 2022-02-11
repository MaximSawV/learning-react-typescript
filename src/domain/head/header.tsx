import React from 'react';
import  styled from '@emotion/styled';

export default function Header() {

    const Header = styled.div`
        width: 100%;
        height: 100px;
        background: #373737;
        color: lime;
        display: flex;
        align-items: center;
        font-size: 3em;
    `;

    const Logo = styled.img`
        height: 100px;
        width: 100px;
    `;

    return(
        <Header>
            <a href="/">
                <Logo src={require("../../images/financio-Logo.png")} alt="logo"/>
            </a>
            <h1>Daitemo</h1>
        </Header>
    )
}