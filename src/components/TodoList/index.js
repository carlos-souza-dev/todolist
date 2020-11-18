import React from 'react';
import Content from '../Content';

// Style
import { Null, TodoListS } from './style';


const TodoList = ({ todos, setTodos, setList, list }) => {
    return (
        <TodoListS>
            {todos ? todos.map(todo => (
                <Content 
                    key={todo.id} 
                    text={todo.text} 
                    todos={todos} 
                    todo={todo} 
                    setTodos={setTodos}
                    setList={setList}
                    list={list}
                />
            )) : <Null>Nenhuma tarefa</Null>
            }
        </TodoListS>
    );
}

export default TodoList;