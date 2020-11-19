import styled from 'styled-components';

export const ContainerBar = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    span {
        color: #000000;
        font-size: 34px;
        font-weight: 500;
        position: absolute;
        right: 30px;
    }
`;

export const BarS = styled.div`
    position: relative;
    width: 70%;
    height: 25px;
    background: #DADADA;
    box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
    border-radius: 30px;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${({percent}) =>  `${percent}%`};
        height: inherit;
        border-radius: 40px;
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        -webkit-text-fill-color: transparent;
        transition: all ease-in-out 1.5s;
    }
`;