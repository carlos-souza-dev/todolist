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
    button {
        box-shadow: 3px 3px 2px #9CA1B1, -3px -3px 2px rgba(255, 255, 255, 0.5);
    
        .fa {
            color: grey;
        }
    }

    div {
        color: grey;
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