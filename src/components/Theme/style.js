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
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient+" 0%,"+currentTheme.endGradient+" 100%"}`});
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;

        @media screen and (max-width: 768px){
            font-size: 15px;
            margin: 0px 0 2px 0;
        }
    }

    .button {
        width: 100%;
        height: 32px;
        border-radius: 30px;
        box-shadow: inset 3px 3px 3px ${({currentTheme}) => `${currentTheme.shadowDark}`}, inset -3px -3px 3px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        border-radius: 30px;
        position: relative;
        cursor: pointer;

        @media screen and (max-width: 768px){
            width: 70%;
            height: 20px;
            margin: 0 auto;
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: ${({btnActive}) => `${btnActive ? "50%" : "0"}`};
            width: 50%;
            height: inherit;
            border-radius: 30px;
            background: ${({currentTheme}) => `${currentTheme.theme}`};
            transition: all linear 0.3s;
        }
    }
`;