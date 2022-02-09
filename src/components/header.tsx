import React, { Component } from 'react';
import './../style-sheets/stylesheet.css';

class Header extends Component {
    state = {};
    render() {
        return (<React.Fragment>
                    <a href="/" className="logo">
                        <img src={require("../images/financio-Logo.png")} alt="logo"/>
                    </a>
                    <h1>Daitemo</h1>
                </React.Fragment>);
    }
}
export default Header;