import React from 'react';

// Style
import { Container, ContentS, CheckS, TrashS } from './style';

const Content = ({ text, todo, todos, setTodos, list, setList }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));   
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
        )}

    return (
        <Container>
            <CheckS onClick={completeHandler}><i className="fa fa-check"></i></CheckS>
            <ContentS>{text}</ContentS>
            <TrashS onClick={deleteHandler} ><i className="fa fa-trash"></i></TrashS>
        </Container>
    );
};

export default Content;