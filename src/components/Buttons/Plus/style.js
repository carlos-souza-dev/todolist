import styled from 'styled-components';

export const PlusS = styled.button`
    width: 61px;
    height: 61px;
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

    .material-icons{
        color: blue;
        font-size: 50px;
        line-height: 61px;
        /* font-weight: bold; */
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;