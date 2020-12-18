import styled from 'styled-components';

export const PlusS = styled.button`
    width: 61px;
    height: 61px;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    margin: 0 10px 0 auto;
    border: none;
    box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 45px;
        height: 45px;
    }

    &:hover {
        box-shadow: 3px 3px 2px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    } 

    &:active {
        box-shadow: -2px -3px 0px ${({currentTheme}) => `${currentTheme.shadowDark}`}, 2px 3px 0px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset -3px -3px 3px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset 3px 3px 3px ${({currentTheme}) => `${currentTheme.shadowDark}`};    
        transition: all linear 0.02s;
    }

    .material-icons{
        font-size: 50px;
        line-height: 61px;
        font-weight: bold;
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient}`} 0%, ${({currentTheme}) => `${currentTheme.endGradient}`} 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;

        @media screen and (max-width: 768px){
            font-size: 35px;
            line-height: 45px;
        }

    }
`;