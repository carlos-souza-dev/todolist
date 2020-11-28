import React from 'react';

// Style
import { InputContainer, InputS, InputEditS } from './style';

// Components
import Plus from '../Buttons/Plus';


const Input = ({ list, setList, setInputText, inputText, edit, setEdit, setBlocked, currentTheme }) => {

    const inputHandler = (e) => {
        if( edit.length > 0 ) {
            setEdit([{done: edit[0].done, text: e.target.value, id: edit[0].id, edit: false}])
        } else {
            setInputText(e.target.value);
        }
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(edit.length > 0){

            setList(
                list.map((element) => {
                    if(element.id === edit[0].id){
                        return {
                            ...element, 
                            text: edit[0].text, 
                            edit: false
                        };
                    }
                    return element;
                })
            );
        } 
        if(inputText){
            setList([
                ...list, {done: false, text: inputText, id: list.length === undefined ? 0 : list.length, edit: false}
            ])
        }
            setInputText('');
            setEdit('');
            setBlocked(false);
    } 

    return (
        <InputContainer currentTheme={currentTheme}>
            <Plus currentTheme={currentTheme} submitHandler={submitHandler} />
            { edit.length > 0 ?
                <InputEditS currentTheme={currentTheme} onChange={inputHandler} value={edit[0].text}   className="input-focus" type="text"/>
                :
                <InputS focu currentTheme={currentTheme} onChange={inputHandler} value={inputText} className="input-focus" type="text" placeholder="Adicionar Tarefa"/>
            }
        </InputContainer>
    );
};

export default Input;