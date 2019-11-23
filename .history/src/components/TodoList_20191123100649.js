import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo key={todo.id} {...todo} on />
            ))
        }
    </ul>
)

export default TodoList