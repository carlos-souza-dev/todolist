import styled from 'styled-components';

export const WrapperS = styled.article`
    width: 60%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const WrapperBar = styled(WrapperS)`
    width: 100%;

    span {
        color: #000000;
        font-size: 44px;
        font-weight: 500;
        position: absolute;
        right: 30px;
    }
`;
