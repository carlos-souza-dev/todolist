import React, {useState, useEffect} from 'react';

// Components
import ColorTheme from '../Theme';

// Style 
import { BarS, ContainerBar } from './style';

const Bar = ({ arrayThemes, list, themes, setThemes, setCurrentTheme, currentTheme }) => {

    const totalDone = list.filter((item) => item.done === true).length;
    const percent = parseFloat(((totalDone * 100) / list.length).toFixed(0));    


    useEffect(() => {
        const funTheme = () => {
        if(themes){
            setCurrentTheme(arrayThemes.light);
        } else {
            setCurrentTheme(arrayThemes.dark);
        }
        }
    
        funTheme();
    },[themes])
  
    
    const themesHandler = () => {
        setThemes(!themes);
    }

    return (
            <ContainerBar currentTheme={currentTheme}>
                <ColorTheme currentTheme={currentTheme} themesHandler={themesHandler} />
                <BarS currentTheme={currentTheme} themesHandler={themesHandler} percent={percent}/>
                <span className="percent">{percent ? percent : 0}%</span>
            </ContainerBar>
    ); 

}

export default Bar;