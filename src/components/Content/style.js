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

    .fa-edit {
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        cursor: pointer;    
    }

    #timer {
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
        box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
        border-radius: 10px;
        border: none;
        font-weight: bold;

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
    }

    #trash{
        color: red;
        font-size: 32px;
        line-height: 53.86px; 
    }
`;
