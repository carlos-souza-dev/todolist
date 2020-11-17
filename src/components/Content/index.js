import React from 'react';

// Style
import { Container, ContentS, CheckS, TrashS } from './style';

const Content = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = (e) => {

        setTodos(todos.filter((item) => {
            return item.id !== todo.id;
        }));
        
        setTodos(todos.filter((item) => {
            return item.id !== todo.id;
        }));   
    };

    return (
        <Container>
            <CheckS><i className="fa fa-check"></i></CheckS>
            <ContentS>{text}</ContentS>
            <TrashS onClick={deleteHandler} ><i className="fa fa-trash"></i></TrashS>
        </Container>
    );
};

export default Content;