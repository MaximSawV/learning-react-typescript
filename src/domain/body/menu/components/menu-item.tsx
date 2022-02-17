import React from 'react';
import {MenuItemDef} from "../lib/item-registry";
import {NavLink} from 'react-router-dom';
import {css} from '@emotion/css';

export interface MenuItemProps {
    item: MenuItemDef;
    onClick?: (item: MenuItemDef) => void;
}

export default function MenuItem({item}: MenuItemProps) {

    return (
        <li key={item.key} className={css(`
            display: flex;
            margin: 10px;
            width: 200px;
            height: 100px;
            align-items: center;
            justify-content: center;


        `)}>
            <NavLink to={`/${item.key}`} style={({ isActive }) => {return {color: isActive ? "lime" : "#7c7a7a"}}}>
                {item.label}
            </NavLink>
        </li>
    );
}