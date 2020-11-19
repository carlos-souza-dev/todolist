import styled from 'styled-components';

export const TodoListS = styled.article`
    width: 100%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    div, button {
        animation: hide-content 1s ease;

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
`;

export const Null = styled.div`
    color: grey;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 53.86px;
    text-align: center;
`;