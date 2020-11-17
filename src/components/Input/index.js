import React from 'react';

// Style
import { InputContainer, InputS } from './style';

// Components
import Plus from '../Buttons/Plus';


const Input = ({ setTodos, setInputText, todos, inputText }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {done: false, text: inputText, id:todos.length === undefined ? 0 : todos.length}
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