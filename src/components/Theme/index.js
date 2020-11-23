import React, { useState } from 'react';

// Style
import { ColorS } from './style';

const ColorTheme = ({currentTheme, themesHandler }) => {

    const [ btnActive, setBtnActive ] = useState(false);

    const changeTheme = () => {
        setBtnActive(!btnActive)
    };

    return (
        <ColorS btnActive={btnActive} currentTheme={currentTheme}>
            <p>Tema</p>
            <div onClick={() => {
                themesHandler();
                changeTheme();
            }} className={`button`}></div>
        </ColorS>
    );
};

export default ColorTheme;