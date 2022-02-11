import React from 'react';
import  styled from '@emotion/styled';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {css} from "@emotion/css";
import {menuItems} from "../../menu/lib/item-registry";


export default function ContentField() {

    const Content = styled.div`
        display: flex;
        positon: 
    `;

    return(
        <div className={css`margin-left: 400px;`}>
                <Routes>
                    {menuItems.map((item) => (
                        <Route path={"/" + item.key} element={item.component}/>
                    ))}
                </Routes>
        </div>
    );
}