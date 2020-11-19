import styled from 'styled-components';

export const SectionS = styled.article`
    width: 100%;
    margin: 0px auto 24px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    h1 {
        margin: 24px 0 0 0;
        font-size: 44px;
        background: linear-gradient(90deg, #9B00FA 0%, #E01717 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;

export const SectionDone = styled(SectionS)`
    display: ${({hide}) => `${hide ? "none" : "block"}`};
    
    div{
        color: grey;
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        animation: hide-content 1s ease;
        text-decoration: line-through;
    }

    button {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        animation: hide-content .5s ease;    
    }

    h1 {
        width: 200px;
        display: block;
        margin: 24px auto 0 auto;
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

        .fa {
            color: grey;
        }
`;

export const Container = styled.main`
    position: relative;
    min-height: 100vh;
    height: auto;
    background: #DADADA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .btn-hide {
        position: fixed;
        padding: 3px 24px;
        border-radius: 20px;
        box-shadow: 4px 4px 7px #9CA1B1, -4px -4px 7px rgba(255,255,255,0.5);
        background: linear-gradient(90deg,#9B00FA 0%,#E01717 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size: 24px;
        bottom: 18px;
        left: 18px;
        cursor: pointer;
        transition: all linear 0.3s;

        &:hover {
            box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
            transition: all linear 0.3s;
        }

        &:active {
        box-shadow: -2px -3px 0px #9CA1B1, 2px 3px 0px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(255, 255, 255, 0.5), inset 3px 3px 3px #9CA1B1;    
        }
    }

    .active-hide {        
        background: grey;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`;