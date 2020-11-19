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
    background: #DADADA;
    box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
    border-radius: 10px;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 53.86px;
    text-align: center;

    &:after {
        content: "";
        width: ${({background}) => `${background}%`};
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: ${({background}) => `${background < 100 ? "10px 0 0 10px" : "10px"}`};
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        transition: all linear 1s;
    }

    .text-content {
        z-index: 3;
        line-height: 53.86px;
        display: block;
        color: black;
    }

    .fa-edit {
        z-index: 3;
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        cursor: pointer;    
    }

    #timer {
        z-index: 5;
        position: absolute;
        top: 50%;
        left: 18px;
        transform: translateY(-50%);
        cursor: pointer;
    }

    #timers {
        position: absolute;
        top: 50%;
        left: 48px;
        padding: 3px;
        transform: translateY(-50%);
        box-shadow: 4px 4px 7px rgba(118, 126, 150, 0.62), -4px -4px 7px rgba(255,255,255,0.5);
        border-radius: 10px;
        background-color: transparent;
        border: none;
        font-weight: bold;
        z-index: 5;

        &:focus {
            border: none;
            outline: none;
        }

        .timer-option {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #DADADA;
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
    background: #DADADA;
    border: none;
    box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
    border-radius: 10px;
    text-align: center;
    transition: all linear 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: -2px -3px 0px #9CA1B1, 2px 3px 0px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(255, 255, 255, 0.5), inset 3px 3px 3px #9CA1B1;    
        transition: all linear 0.02s;
    }

    #check{
        color: green;
        font-size: 32px;
        line-height: 53.86px; 
    }
`;

export const TrashS = styled(CheckS)`
    margin: 0 auto 0 20px;
    
    &:hover {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: -2px -3px 0px #9CA1B1, 2px 3px 0px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(255, 255, 255, 0.5), inset 3px 3px 3px #9CA1B1;    
        transition: all linear 0.02s;
    }

    #trash{
        color: red;
        font-size: 32px;
        line-height: 53.86px; 
    }
`;
