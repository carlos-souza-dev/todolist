import React from 'react';

// Components
import ColorTheme from '../Theme';

// Style 
import { BarS } from './style';
import { WrapperBar } from '../Wrapper/style';

const Bar = () => {
    return (
            <WrapperBar>
                <ColorTheme/>
                <BarS/>
                <span>25%</span>
            </WrapperBar>
    ); 

}

export default Bar;