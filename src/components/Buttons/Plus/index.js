import React from 'react';

// Style
import { PlusS } from './style';

const Plus = ({ submitHandler }) => {
    return (
        <PlusS onClick={submitHandler}><i className="fa fa-plus"></i></PlusS>
    );
};

export default Plus;