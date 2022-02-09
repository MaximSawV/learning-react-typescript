import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SideMenu from './components/sideMenu';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<SideMenu />, document.getElementById('side-menu'));