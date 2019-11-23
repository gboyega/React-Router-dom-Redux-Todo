import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodos from '../containers/VisibleTodos';
import DoneTodo from '../containers/DoneTodo';
import UndoneTodo from '../containers/UndoneTodo';

const App = () => (
     <div>
        <AddTodo />
        <VisibleTodos />
    </div>
)

export default App;
 