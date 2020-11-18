import React from 'react';

// Component
import Content from '../Content';
import Done from '../Done'

// Style
import { TodoListS } from './style';


const TodoList = ({ todos, setList, list }) => {

    return (
        <TodoListS>
            {todos ? todos.map(todo => (
                todo.done === false ?
                <Content 
                    key={todo.id} 
                    text={todo.text}
                    done={todo.done} 
                    todo={todo} 
                    setList={setList}
                    list={list}
                /> : 
                <Done 
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