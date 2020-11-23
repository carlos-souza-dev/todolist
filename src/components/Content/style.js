import styled from 'styled-components';

export const Container = styled.article`
    width: 60%;
    min-height: 60px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;


export const ContentS = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500.52px;
    height: 53.86px;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 10px;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 53.86px;
    text-align: center;
    transition: shadow linear 1s;

    &:after {
        content: "";
        width: ${({background}) => `${background}%`};
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: ${({background}) => `${background < 100 ? "10px 0 0 10px" : "10px"}`};
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient}`} 0%, ${({currentTheme}) => `${currentTheme.endGradient}`} 100%);
        transition: all linear 1s;
    }

    .text-content {
        z-index: 3;
        margin: 0;
        line-height: 53.86px;
        display: block;
        color: ${({background, currentTheme}) => `${background >= 100 ? currentTheme.textTrasition : currentTheme.textEnabled}`};
        animation: ${({background}) => `${background >= 100 ? "transform .1s linear" : ""}`}
    }

    @keyframes transform {
            0%{
                transform: translateX(30%)
            }
            50%{
                transform: translateX(-30%)
            }
        }

    .fa-edit {
        z-index: 3;
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        cursor: pointer;   
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 
    }

    #timer {
        z-index: 5;
        position: absolute;
        top: 50%;
        left: 18px;
        transform: translateY(-50%);
        cursor: pointer;
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 
    }

    #timers {
        position: absolute;
        top: 50%;
        left: 60px;
        padding: 6px;
        transform: translateY(-50%);
        box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        border-radius: 10px;
        background-color: transparent;
        border: none;
        font-weight: bold;
        z-index: 5;
        text-align: center;
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 

        &:focus {
            border: none;
            outline: none;
        }

        .timer-option {
            font-family: Arial, Helvetica, sans-serif;
            background-color: ${({currentTheme}) => `${currentTheme.background}`};
        }
    }

    .timers-disabled {
        opacity: 0;
    }
`;

export const CheckS = styled.button`
    width: 53.86px;
    height: 53.86px;
    margin: 0 20px 0 auto;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    border: none;
    box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

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

    #check{
        color: ${({currentTheme}) => `${currentTheme.check}`};
        font-size: 32px;
        line-height: 53.86px; 
    }
`;

export const TrashS = styled(CheckS)`
    margin: 0 auto 0 20px;
    
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

    #trash{
        color: ${({currentTheme}) => `${currentTheme.trash}`};
        font-size: 32px;
        line-height: 53.86px; 
    }
`;
