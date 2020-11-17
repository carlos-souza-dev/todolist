import React from 'react';
import Content from '../Content';

// Style
import { TodoListS } from './style';


const TodoList = ({ todos }) => {
    return (
        <TodoListS>
            {todos.map(todo => (
                <Content text={todo.text} />
            ))
            }
        </TodoListS>
    );
}

export default TodoList;