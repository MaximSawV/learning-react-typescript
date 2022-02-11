import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {css} from "@emotion/css";
import {menuItems} from "../../menu/lib/item-registry";


export default function ContentField() {

    return(
        <div className={css`
          position: fixed;
          top: 10%;
          left: 10%;
          width: 90%;
          height: 90%;

        `}>
                <Routes>
                    {menuItems.map((item) => (
                        <Route path={"/" + item.key} element={item.component}/>
                    ))}
                </Routes>
        </div>
    );
}