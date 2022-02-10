import React from 'react';
import styled from "@emotion/styled";

export default function CloseButton() {

    const Button = styled.li`
        display: flex;
        margin: 10px;
        width: 200px;
        height: 100px;
        align-items: center;
        justify-content: center;
    `;

    return (
        <>
            <Button key={"close_button"}>
                Close
            </Button>
        </>
    );
}