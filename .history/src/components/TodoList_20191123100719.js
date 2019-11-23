import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleT}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => } />
            ))
        }
    </ul>
)

export default TodoList