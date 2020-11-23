import React from 'react';

// Style
import { PlusS } from './style';

const Plus = ({ submitHandler, currentTheme }) => {
    return (
            <PlusS currentTheme={currentTheme} onClick={submitHandler}><i className="material-icons">add</i></PlusS>
    );
};

export default Plus;