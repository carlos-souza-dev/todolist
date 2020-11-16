import styled from 'styled-components';

export const ColorS = styled.div`
    width: 100px;
    position: absolute;
    left: 16px;
    top: 16px;

    p {
        text-align: center;
        font-size: 24px;
        margin: 8px 5px;
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .button {
        width: 100%;
        height: 25px;
        border-radius: 30px;
        box-shadow: inset 3px 3px 3px #9CA1B1, inset -3px -3px 3px rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: inherit;
            border-radius: 30px;
            background: black;
        }
    }
`;