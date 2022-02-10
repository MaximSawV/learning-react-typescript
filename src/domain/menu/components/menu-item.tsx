import React from 'react';
import {MenuItemDef} from "../lib/item-registry";

export interface MenuItemProps {
    item: MenuItemDef;
    onClick?: (item: MenuItemDef) => void;
}

export default function MenuItem({item, onClick}: MenuItemProps) {

    return (
        <li key={item.key} onClick={() => onClick && onClick(item)} className={item.color !== undefined ? 'orange' : ''}>
            {item.label}

            {item.children && item.isOpen && item.children.length > 0 && (
                <ul>
                    {item.children.map((child) => (
                        <MenuItem item={child}/>
                    ))}
                </ul>
            )}
        </li>
    );
}