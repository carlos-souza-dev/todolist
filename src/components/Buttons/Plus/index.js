import React from 'react';

// Style
import { PlusS } from './style';

const Plus = ({ getDoing }) => {
    return (
        <PlusS onClick={getDoing}><i className="fa fa-plus"></i></PlusS>
    );
};

export default Plus;