import React from 'react';

// Components
import ColorTheme from '../Theme';

// Style 
import { BarS, ContainerBar } from './style';

const Bar = ({ list }) => {

    const totalDone = list.filter((item) => item.done === true).length;
    const percent = parseFloat(((totalDone * 100) / list.length).toFixed(0));    

    return (
            <ContainerBar>
                <ColorTheme/>
                <BarS percent={percent}/>
                <span>{percent ? percent : 0}%</span>
            </ContainerBar>
    ); 

}

export default Bar;