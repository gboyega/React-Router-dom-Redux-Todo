import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodos from '../containers/VisibleTodos';
import DoneTodo from '../containers/DoneTodo';
import UndoneTodo from '../containers/UndoneTodo';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <AddTodo />
            <VisibleTodos />
        </div>
    </Router>
     
)

export default App;
 