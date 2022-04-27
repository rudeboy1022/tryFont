import React from 'react'
import {jsx, css} from '@emotion/react';

export const Header = () => {

    const headerStyle = css({
        width: "100%",
        height: "10vh",
        backgroundColor: "gray",
        margin: 0,
        padding: 0
    })

    return(
        <header css = {headerStyle}>
            <h1 className='logo'>Logo</h1>
            <h2>Try Some Fonts and BackGround</h2>
        </header>
    )
}