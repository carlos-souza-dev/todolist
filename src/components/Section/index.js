import React from 'react';

// Style
import { SectionS } from './style';

const Section = ({ children, currentTheme }) => {
    
    return (
        <SectionS currentTheme={currentTheme} >{children}</SectionS>
    );
};

export default Section;