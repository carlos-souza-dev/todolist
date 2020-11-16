import styled from 'styled-components';

export const CheckS = styled.button`
    width: 53.86px;
    height: 53.86px;
    background: #DADADA;
    border: none;
    box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
    border-radius: 10px;
    text-align: center;
    transition: all linear 0.3s;

    &:hover {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        transition: all linear 0.3s;
    }

    &:focus {
        outline: none;
    }

    .fa-check{
        color: green;
        font-size: 30px;
        line-height: 53.86px; 
    }
`;