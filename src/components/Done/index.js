import React from 'react';

// Style
import { Container, DoneS, CheckS, TrashS } from './style';

const Done = ({ text, todo, list, setList, blocked, currentTheme }) => {

    const deleteHandler = () => {
        setList(list.filter((element) => element.id !== todo.id));   
    };

    const completeHandler = () => {
        if(blocked === false){
            setList(
                list.map((element) => {
                    if(element.id === todo.id){
                        return {
                            ...element, 
                            done: !element.done,
                        };
                    }
                    return element;
                })
            )
        }
    }

    {
        if(text){
            return (
                <Container currentTheme={currentTheme} >
                    <CheckS currentTheme={currentTheme} onClick={completeHandler}><i className="material-icons" id="return">keyboard_return</i></CheckS>
                    <DoneS currentTheme={currentTheme} >{text}</DoneS>
                    <TrashS currentTheme={currentTheme} onClick={deleteHandler} ><i className="material-icons" id="trash">delete_outline</i></TrashS>
                </Container>
            );
        }
    }
};

export default Done;