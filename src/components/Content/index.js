import { set } from 'date-fns';
import React, { useState, useEffect } from 'react';

// Style
import { Container, ContentS, CheckS, TrashS } from './style';

const Content = ({ text, todo, list, setList, setEdit, currentTheme }) => {

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
        );
    };

    const editHandler = () => {
        setEdit([
            {done: false, text: todo.text, id: todo.id}
        ]);
        setList(list.filter((element) => element.id !== todo.id));
    };

    const [ seconds, setSeconds ] = useState(0);
    const [ time, setTimer ] = useState();
    const [ toggle, setToggle ] = useState(false);
    const [ order, setOrder ] = useState({up: false, down: false});
    const [ doingList, setDoingList ] = useState([]);

    useEffect(() => {
        setDoingList(
            list.filter((element) => element.done === false).sort(function(a,b){
                return parseInt(a.id)  - parseInt(b.id);
            })
        )
    },[list])

    useEffect(() => {
        if(seconds === 3){
            setToggle(false);
        }
        if(seconds < time){
        const interval = setInterval(() => {
               setSeconds(seconds => seconds + 1)
            }, 1000);
            return () => clearInterval(interval);
        }        
    }, [seconds, time]);

    const toggleHandler = () => {
        setToggle(!toggle);
    };

    const timerHandler = (e) => {
        setTimer(Number(e.target.value) * 60);
        setSeconds(0);
    };

    const orderListUp = () => {
        const positionArr = doingList.map(function(e) { return e.id; }).indexOf(todo.id)
        if(todo.id !== doingList[doingList.length - doingList.length].id){
            setList(
                list.map((element) => {
                    if(element.id === doingList[positionArr].id){
                        return {
                            ...element, 
                            id: doingList[positionArr - 1].id,
                        };
                    }
                    if(element.id === doingList[positionArr - 1].id){
                        return {
                            ...element, 
                            id: doingList[positionArr].id,
                        };
                    }
                    return element;
                })
            );
            setOrder({up: false, down: false});
        }
    };

    const orderListDown = () => {
        const positionArr = doingList.map(function(e) { return e.id; }).indexOf(todo.id)
        if(todo.id !== doingList[doingList.length -1].id){
            setList(
                list.map((element) => {
                    if(element.id === doingList[positionArr].id){
                        return {
                            ...element, 
                            id: doingList[positionArr + 1].id,
                        };
                    }
                    if(element.id === doingList[positionArr + 1].id){
                        return {
                            ...element, 
                            id: doingList[positionArr].id,
                        };
                    }
                    return element;
                })
            );
            setOrder({up: false, down: false});
        }
    };
    
    const toggleOrderEnabled = () => {
        
        if(doingList.length !== 1){
            if(todo.id === doingList[doingList.length - doingList.length].id){
                setOrder({up: false, down: true});
            } else if (todo.id === doingList[doingList.length - 1].id){
                setOrder({up: true, down: false});
            } else {
                setOrder({up: true, down: true});
            }
        }
    };

    const toggleOrderDisabled = () => {
        if(order.up || order.down){
            setOrder({up: false, down: false});
        }
    };

    
    if(text){
        return (
            <Container currentTheme={currentTheme}>
                <CheckS currentTheme={currentTheme} onClick={completeHandler}><i className="material-icons" id="check">done</i></CheckS>
                <ContentS order={order} id="content" time={time} currentTheme={currentTheme} background={parseFloat(((seconds * 100) / time).toFixed(0))}>
                <span onClick={toggleHandler}><i className="material-icons" id="timer">timer</i></span>    
                <select name="timers" onChange={timerHandler} className={!toggle ? "timers-disabled" : ""} id="timers">
                    <option className="timer-option" value="">0</option>
                    <option className="timer-option" value="1">1 min</option>
                    <option className="timer-option" value="20">10  min</option>
                    <option className="timer-option" value="30">30  min</option>
                    <option className="timer-option" value="40">40  min</option>
                    <option className="timer-option" value="60">60  min</option>
                </select>
                <p className="text-content">{text}</p>
                <span onClick={orderListUp} ><i className={order.up ? "fa fa-sort-up up-active" : "fa fa-sort-up"} ></i></span>
                <span onClick={orderListDown} ><i className={order.down ? "fa fa-sort-down down-active" : "fa fa-sort-down"} ></i></span>
                <span onClick={()=> {
                    order.up || order.down ? toggleOrderDisabled() : toggleOrderEnabled();
                }} ><i className={order.up || order.down ? "fa fa-times" : "fa fa-sort"}></i></span>
                <span onClick={editHandler} ><i className="fa fa-edit"></i></span>
                </ContentS>
                <TrashS currentTheme={currentTheme} onClick={deleteHandler} ><i className="material-icons" id="trash">delete_outline</i></TrashS>
            </Container>
        );
    } 
    
};

export default Content;