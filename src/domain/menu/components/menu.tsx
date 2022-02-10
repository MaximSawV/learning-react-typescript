import React, {useState} from 'react';
import useMenuItems from "../hooks/use-menu-items";
import MenuItem from "./menu-item";
import {BrowserRouter, Routes} from 'react-router-dom';


export default function Menu() {

    const {myMenuItems, toggleOpen} = useMenuItems();

    return (
        <BrowserRouter>
            <Routes>
                {myMenuItems.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            onClick={() => toggleOpen(index)}/>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}