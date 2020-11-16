import styled from 'styled-components';

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
        width: 25%;
        height: inherit;
        border-radius: 40px;
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        -webkit-text-fill-color: transparent;
    }
`;