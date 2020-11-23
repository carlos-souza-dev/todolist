import styled from 'styled-components';

export const InputContainer = styled.article`
    width: 60%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const InputS = styled.input`
    width: 624px;
    height: 56px;
    background: ${({currentTheme}) => `${currentTheme.background}`};
    margin: 0 auto 0 10px;
    box-shadow: inset 6px 6px 5px ${({currentTheme}) => `${currentTheme.shadowDark}`}, inset -6px -6px 5px ${({currentTheme}) => `${currentTheme.shadowLight}`};
    border-radius: 30px;
    font-size: 24px;
    padding: 0px 8px;
    border: 5px solid ${({currentTheme}) => `${currentTheme.background}`};
    font-family: sans-serif;
    font-weight: 300;
    line-height: 53.86px;
    text-align: center;
    color: ${({currentTheme}) => `${currentTheme.textEnabled}`};
    
    &:focus {
            box-shadow: 4px 4px 7px ${({currentTheme}) => `${currentTheme.shadowDark}`}, -4px -4px 7px ${({currentTheme}) => `${currentTheme.shadowLight}`},inset 8px 8px 5px ${({currentTheme}) => `${currentTheme.shadowDark}`}, inset -8px -8px 5px ${({currentTheme}) => `${currentTheme.shadowLight}`};
            border: 5px solid ${({currentTheme}) => `${currentTheme.background}`};
            outline: none;
    }
`;

export const InputEditS = styled(InputS)``;