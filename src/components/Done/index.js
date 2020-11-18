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
                    <CheckS onClick={completeHandler}><i className={done === true ? "fa fa-undo" : "fa fa-check"}></i></CheckS>
                    <DoneS>{text}</DoneS>
                    <TrashS onClick={deleteHandler} ><i className="fa fa-trash"></i></TrashS>
                </Container>
            );

        }
    }
};

export default Done;