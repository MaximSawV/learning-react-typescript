import React, {useState} from 'react';
import useMenuItems from "../hooks/use-menu-items";
import MenuItem from "./menu-item";
import CloseButton from "./close-menu-button";
import  styled from '@emotion/styled';
import NavLink from "react-router-dom";


export default function Menu() {

    const {myMenuItems, toggleOpen} = useMenuItems();

    const MenuSpace = styled.nav`
        background: #373737;
        font-size: 1.5em;
        color: #7c7a7a;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 100px;
        left: 0px;
        height: 100%;
        width: 300px;
        align-items: center;
        margin: 0;
    `;

    return (
        <MenuSpace>
            {myMenuItems.map((item, index) => {
                return (
                    <MenuItem
                        item={item}
                        onClick={() => toggleOpen(index)}/>
                );
            })}
        </MenuSpace>
    );
}