import React from 'react';

// Style
import { PlusS } from './style';

const Plus = ({ submitHandler }) => {
    return (
        <PlusS onClick={submitHandler}><i className="material-icons">add</i></PlusS>
    );
};

export default Plus;