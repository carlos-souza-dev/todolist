import React from 'react';

// Style
import { Container, DoneS, CheckS, TrashS } from './style';

const Done = ({done, text, todo, list, setList }) => {

    const deleteHandler = () => {
        setList(list.filter((element) => element.id !== todo.id));   
    };

    const completeHandler = () => {

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

    {
        if(text){
            return (
                <Container>
                    <CheckS onClick={completeHandler}><i className="material-icons" id="return">keyboard_return</i></CheckS>
                    <DoneS>{text}</DoneS>
                    <TrashS onClick={deleteHandler} ><i className="material-icons" id="trash">delete_outline</i></TrashS>
                </Container>
            );

        }
    }
};

export default Done;