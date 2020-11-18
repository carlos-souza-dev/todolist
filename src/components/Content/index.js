import React from 'react';

// Style
import { Container, ContentS, CheckS, TrashS } from './style';

const Content = ({done, text, todo, list, setList, setEdit }) => {

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
    };

    const editHandler = () => {
        setEdit([
            {done: false, text: todo.text, id: todo.id}
        ]);
        setList(list.filter((element) => element.id !== todo.id));
    };

    {
        if(text){
            return (
                <Container>
                    <CheckS onClick={completeHandler}><i className={done === true ? "fa fa-undo" : "fa fa-check"}></i></CheckS>
                    <ContentS>{text}
                    <span onClick={editHandler} ><i className="fa fa-edit"></i></span>
                    </ContentS>
                    <TrashS onClick={deleteHandler} ><i className="fa fa-trash"></i></TrashS>
                </Container>
            );
        } 
    }
};

export default Content;