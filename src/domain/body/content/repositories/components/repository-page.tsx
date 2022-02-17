import React from 'react';
import {css} from "@emotion/css";

export default function RepositoryPage() {

    return(
        <div className={css`
            display: flex;
            flex-direction: row;
        `}>
            <div>
                Manage Repos
            </div>
            <div>
                Display Repos
            </div>
        </div>
    );
}