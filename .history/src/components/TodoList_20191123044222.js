import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo key={to} {...todo} />
            ))
        }
    </ul>
)

export default TodoList