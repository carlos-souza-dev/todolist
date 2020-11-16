import React from 'react';

// Style
import { InputS } from './style';

// Components
import Plus from '../Buttons/Plus';
import Wrapper from '../Wrapper';


const Input = ({ getDoing }) => {
    return (
        <Wrapper>
            <Plus getDoing={getDoing} />
            <InputS className="input-focus" type="text" placeholder="Adicionar Tarefa"/>
        </Wrapper>
    );
};

export default Input;