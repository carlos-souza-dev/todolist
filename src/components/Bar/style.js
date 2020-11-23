import styled from 'styled-components';

export const ContainerBar = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .percent {
        color: ${({currentTheme}) => `${currentTheme.textEnabled}`};
        font-size: 34px;
        font-weight: 500;
        position: absolute;
        right: 5%;
    }
`;

export const BarS = styled.div`
    position: relative;
    width: 70%;
    height: 25px;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 30px;

    &:after {
        z-index: 3;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${({percent}) =>  `${percent}%`};
        height: inherit;
        border-radius: 40px;
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient+" 0%,"+currentTheme.endGradient+" 100%"}`});
        -webkit-text-fill-color: transparent;
        transition: all linear 1.5s;
    }

    &:before {
        z-index: 0;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${({percent}) =>  `${percent}%`};
        height: inherit;
        border-radius: 40px;
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient+" 0%,"+currentTheme.endGradient+" 100%"}`});
        -webkit-text-fill-color: transparent;
        opacity: ${({percent}) => `${percent === 100 ? 1 : 0}`};
        animation: ${({percent}) =>  `${percent >= 100 ? "scale 1.5s linear 1.5s" : ""}`};
        transition: all linear 1.5s;
    }

    @keyframes scale {
        0%{
            transform: scale(1);
            opacity: 1;
        }
        25%{
            opacity: 0;
            transform: scale(1.5, 2.5);
        }
        50%{
            opacity: 0;
            transform: scale(2, 3);
        }
        100%{
            opacity: 0;
            transform: scale(1);
        }
    }
`;