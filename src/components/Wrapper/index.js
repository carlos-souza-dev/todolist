import React from 'react';

// Style
import { WrapperS } from './style';


const Wrapper = ({ children }) => {
    return (
        <WrapperS>{children}</WrapperS>
    );
}

export default Wrapper;