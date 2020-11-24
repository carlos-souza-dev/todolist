import styled from 'styled-components';

export const Container = styled.article`
    width: 60%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;


export const DoneS = styled.div`
    width: 500.52px;
    height: 53.86px;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    box-shadow: 3px 3px 2px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 10px;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 53.86px;
    text-align: center;
`;

export const CheckS = styled.button`
    width: 53.86px;
    height: 53.86px;
    margin: 0 20px 0 auto;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    border: none;
    box-shadow: 3px 3px 2px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 10px;
    text-align: center;

    &:hover #return {
        color: ${({currentTheme}) => `${currentTheme.check}`};
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: -2px -3px 0px ${({currentTheme}) => `${currentTheme.shadowDark}`}, 2px 3px 0px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset -3px -3px 3px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset 3px 3px 3px ${({currentTheme}) => `${currentTheme.shadowDark}`};    
        transition: all linear 0.02s;
    }

    #return {
        color: ${({currentTheme}) => `${currentTheme.textDisabled}`};
        font-size: 30px;
        line-height: 53.86px; 
    }
`;

export const TrashS = styled(CheckS)`
    margin: 0 auto 0 20px;

    &:hover #trash {
        color: ${({currentTheme}) => `${currentTheme.trash}`};
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: -2px -3px 0px ${({currentTheme}) => `${currentTheme.shadowDark}`}, 2px 3px 0px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset -3px -3px 3px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset 3px 3px 3px ${({currentTheme}) => `${currentTheme.shadowDark}`};    
        transition: all linear 0.02s;
    }

    #trash{
        color: ${({currentTheme}) => `${currentTheme.textDisabled}`};
        font-size: 30px;
        line-height: 53.86px; 
    }
`;