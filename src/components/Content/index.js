import React, { useState, useEffect } from 'react';

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

    const [ seconds, setSeconds ] = useState();
    const [ time, setTimer ] = useState(0);
    const [ toggle, setToggle ] = useState(false);

    // const percent = parseFloat(((seconds * 100) / time).toFixed(0)); 

    useEffect(() => {
        if(seconds < time){
        const interval = setInterval(() => {
               setSeconds(seconds => seconds + 1)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds]);

    const toggleHandler = () => {
        setToggle(!toggle);
    };

    const timerHandler = (e) => {
        // setTimer(Number(e.target.value) * 60);
        setTimer(Number(e.target.value));
        setSeconds(0)
    }

    console.log(seconds)

    {
        if(text){
            return (
                <Container>
                    <CheckS onClick={completeHandler}><i className={done === true ? "fa fa-undo" : "fa fa-check"}></i></CheckS>
                    <ContentS>
                    <select name="timers" onChange={timerHandler} className={!toggle ? "timers-disabled" : ""} id="timers">
                        <option className="timer-option" value="0">0</option>
                        <option className="timer-option" value="3">3 min</option>
                        <option className="timer-option" value="20">20  min</option>
                        <option className="timer-option" value="30">30  min</option>
                        <option className="timer-option" value="40">40  min</option>
                        <option className="timer-option" value="60">60  min</option>
                    </select>
                    <span onClick={toggleHandler}><i className="fa fa-hourglass-start"></i></span>    
                    {text}
                    <span onClick={editHandler} ><i className="fa fa-edit"></i></span>
                    </ContentS>
                    <TrashS onClick={deleteHandler} ><i className="fa fa-trash"></i></TrashS>
                </Container>
            );
        } 
    }
};

export default Content;