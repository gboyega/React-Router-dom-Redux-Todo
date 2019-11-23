import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, togg}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => } />
            ))
        }
    </ul>
)

export default TodoList