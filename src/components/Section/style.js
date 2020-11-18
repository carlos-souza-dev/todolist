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

    div{
        color: grey;
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        animation: hide-content 1s ease;
        text-decoration: line-through;

        @keyframes hide-content {
            0%{
                opacity: 2;
            }
            25%{
                opacity: .4;
            }
            50%{
                opacity: .6;
            }
            75%{
                opacity: .8;
            }
            100%{
                opacity: 1;
            }
        }
    }
    button {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
        animation: hide-content .5s ease;    

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
    }
`;

export const Container = styled.main`
    min-height: 100vh;
    height: auto;
    background: #DADADA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;