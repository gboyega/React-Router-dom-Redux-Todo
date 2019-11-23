import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo {...t} />
            ))
        }
    </ul>
)

export default TodoList