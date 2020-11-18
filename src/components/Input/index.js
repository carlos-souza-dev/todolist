import React from 'react';

// Style
import { InputContainer, InputEditS, InputS } from './style';

// Components
import Plus from '../Buttons/Plus';


const Input = ({ list, setList, setInputText, inputText, edit, setEdit }) => {

    const inputHandler = (e) => {
        if( edit.length > 0 ) {
            setEdit([{done: edit[0].done, text: e.target.value, id: edit[0].id}])
        } else {
            setInputText(e.target.value);
        }
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(edit.length > 0){
            setList([
                ...list, {done: edit[0].done, text: edit[0].text, id: edit[0].id}
            ])
        } else {
            setList([
                ...list, {done: false, text: inputText, id: list.length === undefined ? 0 : list.length}
            ])
        }
        setInputText('');
        setEdit('');
    };

    console.log("Edit",edit[0])
    console.log("Text",inputText.length)

    return (
        <InputContainer>
            <Plus submitHandler={submitHandler} />
            { edit.length > 0 ?
                <InputS onChange={inputHandler} value={edit[0].text}   className="input-focus" type="text"/>
                :
                <InputS onChange={inputHandler} value={inputText} className="input-focus" type="text" placeholder="Adicionar Tarefa"/>
            }
            {/* { edit ? <InputEditS value={edit}/> : null} */}
        </InputContainer>
    );
};

export default Input;