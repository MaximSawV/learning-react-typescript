import React, {useState} from 'react';
import Header from "./head/header";
import Menu from "./body/menu/components/menu";
import Content from './body/content/components/content';
import {BrowserRouter} from 'react-router-dom';


export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(true);

    return (
        <BrowserRouter>
            {loggedIn === false && (
                <>
                    <Header />
                    Login Maske
                </>
            )}

            {loggedIn === true && (
                <>
                    <Header />
                    <Menu />
                    <Content/>
                </>
            )}

        </BrowserRouter>
    )
}