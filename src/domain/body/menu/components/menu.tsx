import React from 'react';
import useMenuItems from "../hooks/use-menu-items";
import MenuItem from "./menu-item";
import {css} from '@emotion/css';


export default function Menu() {

    const {myMenuItems, toggleOpen} = useMenuItems();

    return (
        <ul className={css(`
            margin: 0;
            padding: 0;
            display: flex;
            position: absolute;
            width: 10%;
            justify-content: center;
            font-size: 2em;
            background: #373737;
            height: -webkit-fill-available;
        `)}>
            <nav>

                {myMenuItems.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            onClick={() => toggleOpen(index)}
                        />
                    );
                })}
            </nav>
        </ul>
    );
}