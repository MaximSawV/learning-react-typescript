import React, {useState} from 'react';
import css from '@emotion/react';
import useMenuItems from "../hooks/use-menu-items";
import MenuItem from "./menu-item";

export default function Menu() {

    const {myMenuItems, toggleOpen} = useMenuItems();

    return (
        <>
            <ul>
                {myMenuItems.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            onClick={() => toggleOpen(index)}/>
                    );
                })}
            </ul>
        </>
    )
}