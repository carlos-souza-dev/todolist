import React from 'react';

// Components
import ColorTheme from '../Theme';

// Style 
import { BarS, ContainerBar } from './style';

const Bar = () => {
    return (
            <ContainerBar>
                <ColorTheme/>
                <BarS/>
                <span>25%</span>
            </ContainerBar>
    ); 

}

export default Bar;