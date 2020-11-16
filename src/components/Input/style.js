import styled from 'styled-components';

export const InputS = styled.input`
        width: 624px;
        height: 56px;
        background: #DADADA;
        box-shadow: inset 6px 6px 5px #9CA1B1, inset -6px -6px 5px rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        font-size: 24px;
        padding: 0px 8px;
        border: 5px solid #DADADA;
        font-family: sans-serif;
        font-weight: 300;
        line-height: 53.86px;
        text-align: center;
        
        &:focus {
                box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5),inset 8px 8px 5px #9CA1B1, inset -8px -8px 5px rgba(255, 255, 255, 0.5);
                border: 5px solid #DADADA;
                outline: none;
        }
`;