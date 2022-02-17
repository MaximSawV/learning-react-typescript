import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {css} from "@emotion/css";
import {menuItems} from "../../menu/lib/item-registry";
import RegistrationField from './../../../registration-field';


export default function ContentField() {

    return(
        <div className={css`
          position: fixed;
          top: 10%;
          left: 10%;
          width: 90%;
          height: 85%;
          border-radius: 18px 0 0 0;

        `}>
                <Routes>
                    {menuItems.map((item) => (
                        <Route path={"/" + item.key} element={item.component}/>
                    ))}
                </Routes>
        </div>
    );
}