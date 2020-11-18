import React from 'react';

// Style
import { InputContainer, InputS } from './style';

// Components
import Plus from '../Buttons/Plus';


const Input = ({ list, setList, setInputText, inputText }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        setList([
            ...list, {done: false, text: inputText, id:list.length === undefined ? 0 : list.length}
        ])
        setInputText('');
    };

    return (
        <InputContainer>
            <Plus submitHandler={submitHandler} />
            <InputS onChange={inputHandler} value={inputText} className="input-focus" type="text" placeholder="Adicionar Tarefa"/>
        </InputContainer>
    );
};

export default Input;