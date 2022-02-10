import React from 'react';
import {MenuItemDef} from "../lib/item-registry";
import  styled from '@emotion/styled';
import {Route} from 'react-router-dom';

export interface MenuItemProps {
    item: MenuItemDef;
    onClick?: (item: MenuItemDef) => void;
}

export default function MenuItem({item}: MenuItemProps) {

    const Button = styled.li`
        display: flex;
        margin: 10px;
        width: 200px;
        height: 100px;
        align-items: center;
        justify-content: center;
        
        &: > NavLink {
            color: isActive ? "lime" : "#7c7a7a";
    `;

    return (
        <Route>

        </Route>
    );
}