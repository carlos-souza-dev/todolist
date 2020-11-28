import React from 'react';

// Component
import Content from '../Content';
import Done from '../Done'

// Style
import { TodoListS } from './style';


const TodoList = ({ todos, setList, list, setEdit, blocked, setBlocked, currentTheme }) => {

    if(todos){
        todos.sort(function(a,b){
            return parseInt(a.id)  - parseInt(b.id);
        })
    }

    return (
        <TodoListS currentTheme={currentTheme}>
            {todos ? todos.map(todo => (
                todo.done === false ?
                <Content
                    blocked={blocked}
                    setBlocked={setBlocked} 
                    currentTheme={currentTheme}
                    key={todo.id} 
                    text={todo.text}
                    done={todo.done} 
                    todo={todo} 
                    setList={setList}
                    list={list}
                    setEdit={setEdit}
                /> : 
                <Done 
                    blocked={blocked} 
                    currentTheme={currentTheme}
                    key={todo.id} 
                    text={todo.text}
                    done={todo.done}
                    todo={todo} 
                    setList={setList}
                    list={list}
                /> 
            )) : null
            }
        </TodoListS>
    );
}

export default TodoList;