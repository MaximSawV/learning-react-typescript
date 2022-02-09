import React, { Component } from 'react';
import './../style-sheets/stylesheet.css';

class Header extends Component {
    state = {};
    render() {
        return (<div className="head">
            <a className="logo">
                <img src="./../images/financio-Logo.png" alt="logo"/>
            </a>
        </div>)
    }
}

export default Header;