import styled from 'styled-components';

export const Container = styled.article`
    width: 60%;
    min-height: 60px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    &.editing {

        #content, button {
            color: ${({currentTheme}) => `${currentTheme.textDisabled}`};
            box-shadow: -3px -3px 15px 0px ${({currentTheme}) => `${currentTheme.beginGradient}`}, 3px 3px 15px 0px ${({currentTheme}) => `${currentTheme.endGradient}`};
            animation: transitionEditing 1s ease 0s infinite alternate none;
            transition: box-shadow linear .5s;
            pointer-events: none;
        }

        #check, #trash, #content, #timer, p, i {
            color: ${({currentTheme}) => `${currentTheme.textDisabled}`};
        }
    }
    
    @keyframes transitionEditing {
        0%{

            transform: translate(-20px, 0px);
        }
        15%{
             transform: translate(-15px, 5px);
        }
        30%{
            transform: translate(-10px, 0px);
        }
        45%{
            transform: translate(-5px, -5px);
        }
        60%{
             transform: translate(0px,0px);
        }
        75%{
             transform: translate(5px, 5px);
        }
        100%{
            transform: translate(10px, 0px);
        }
        
    }
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

    @media screen and (max-width: 768px){
        height: 40px;
        font-size: 15px;
    }

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
        width: 73.5%;
        z-index: 3;
        margin: 0;
        line-height: 53.86px;
        display: block;
        color: ${({background, currentTheme}) => `${background >= 100 ? currentTheme.textTrasition : currentTheme.textEnabled}`};
        animation: ${({background}) => `${background >= 100 ? "transform .1s linear" : ""}`}
    }

    .fa-sort {
        opacity: ${({order}) => `${order.up || order.down ? 0 : 1}`};
        cursor: ${({order}) => `${order.up || order.down ? "" : "pointer"}`};
        z-index: 3;
        position: absolute;
        top: 50%;
        right: 52px;
        transform: translateY(-50%);
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 
        transition: opacity linear 0.4s;
     
        @media screen and (max-width: 768px){
            right: 45px;
        }
    }

    .fa-times {
        cursor: pointer;
        z-index: 3;
        position: absolute;
        top: 50%;
        right: 52px;
        transform: translate(18%, -50%);
        color: ${({currentTheme}) => `${currentTheme.trash}`};
        transition: opacity linear 0.4s; 

        @media screen and (max-width: 768px){
            right: 45px;
        }
    }  

    .fa-sort-up {
        opacity: ${({order}) => `${order.up ? 1 : 0}`};
        z-index: 3;
        width: 0px;
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 
        cursor: pointer;
        font-size: 0px;
        transform: translate(-2px,0px);
        transition: color linear .2s;
        transition: transform linear .2s;
        transition: opacity linear 0.4s;
    }

    .up-active {
        z-index: 3;
        font-size: 34px;
        transform: translateY(-28px);
        transition: all linear 0.4s;

        @media screen and (max-width: 768px){
            font-size: 30px;
            transform: translate(-22px, -25px);
        }
    }

    .fa-sort-down {
        opacity: ${({order}) => `${order.down ? 1 : 0}`};
        z-index: 3;
        width: 0px;
        color: ${({currentTheme}) => `${currentTheme.iconColor}`}; 
        cursor: pointer;
        font-size: 24px;
        transform: translateY(-2px,0px);
        transition: color linear .2s;
        transition: transform linear .2s;
        transition: opacity linear 0.4s;

        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }  

    .down-active {
        z-index: 3;
        font-size: 34px;
        transform: translateY(35px);
        transition: all linear 0.4s;

        @media screen and (max-width: 768px){
            font-size: 30px;
            transform: translate(-22px, 35px);
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
        color: ${({currentTheme, time}) => `${time > 0 ? currentTheme.check : currentTheme.iconColor}`}; 

        @media screen and (max-width: 768px){
            font-size: 18px;
        }
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
        background-color: ${({currentTheme}) => `${currentTheme.background}`};

        @media screen and (max-width: 768px){
            left: 45px;
            padding: 3px 6px;
        }

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
        pointer-events: none;
        transition: opacity linear .5s;
    }

    @keyframes transform {
        0%{
            transform: translateX(30%)
        }
        50%{
            transform: translateX(-30%)
        }
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

    @media screen and (max-width: 768px){
        height: 40px;
        width:  40px;
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

    #check{
        color: ${({currentTheme}) => `${currentTheme.check}`};
        font-size: 32px;
        line-height: 53.86px; 

        @media screen and (max-width: 768px){
            font-size: 20px;
            line-height: 40px;
        }
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

        @media screen and (max-width: 768px){
            font-size: 20px;
            line-height: 40px;
        }
    }
`;
