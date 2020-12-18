import styled from 'styled-components';

export const SectionS = styled.article`
    width: 100%;
    margin: 0px auto 24px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    overflow: hidden;

    .title-h1 {
        margin: 24px 0 0 0;
        font-size: calc( 1.5rem + (8/1200) * 100 * .5vw);
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient+" 0%,"+currentTheme.endGradient+" 100%"}`});
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;

export const SectionDone = styled(SectionS)`
    overflow: hidden;
    height: ${({ heightValue }) => `${heightValue}px`};
    max-height: 5000px;
    transition: max-height .5s ease-in-out;
    
    &.done-hide {
        max-height: 0;
        pointer-events: none;
        transition: max-height linear;
    }
    
    div{
        color: grey;
        box-shadow: 3px 3px 2px${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        animation: hide-content .5s ease;
        text-decoration: line-through;
    }

    button {
        box-shadow: 3px 3px 2px${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        animation: hide-content .5s ease-in-out;    
    }

    .title-h1 {
        width: 220px;
        text-align: center;
        display: block;
        margin: 24px auto 0 auto;
    }

    .fa {
        color: grey;
    }

    @keyframes hide-content {
        0%{
            opacity: 0;
        }
        25%{
            opacity: .3;
        }
        50%{
            opacity: .6;
        }
        75%{
            opacity: .9;
        }
        100%{
            opacity: 1;
        }
    }
`;

export const Container = styled.main`
    position: relative;
    min-height: 100vh;
    height: auto;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .btn-hide {
        position: absolute;
        height: 30px;
        width: auto;
        padding: 3px 24px;
        border-radius: 20px;
        box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`};
        background: linear-gradient(90deg, ${({currentTheme}) => `${currentTheme.beginGradient+" 0%,"+currentTheme.endGradient+" 100%"}`});
        -webkit-text-fill-color: ${({currentTheme}) => `${currentTheme.background}`};
        font-size: 24px;
        bottom: ${({ heightValue }) => `${heightValue}px`};
        left: 18px;
        text-align: center;
        cursor: pointer;
        z-index: 30;

        @media screen and (max-width: 768px){
            height: 20px;
            padding: 3px 14px;

            font-size: 16px;
            background-color: ${({currentTheme}) => `${currentTheme.background}`};
        }

        &:hover {
            box-shadow: 3px 3px 2px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -3px -3px 2px ${({currentTheme}) => `${currentTheme.shadowLight}`};
            transition: all linear 0.3s;
        }

        &:active {
            box-shadow: -2px -3px 0px ${({currentTheme}) => `${currentTheme.shadowDark}`}, 2px 3px 0px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset -3px -3px 3px ${({currentTheme}) => `${currentTheme.shadowLight}`}, inset 3px 3px 3px ${({currentTheme}) => `${currentTheme.shadowDark}`};    
        }
    }

    .active-hide {        
        background: ${({currentTheme}) => `${currentTheme.textDisable}`};
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;