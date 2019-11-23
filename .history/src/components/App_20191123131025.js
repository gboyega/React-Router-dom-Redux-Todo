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
            <switch>
                <Route path='/undone'>
                    <UndoneTodo />
                </Route>

                <Route path='/done'>
                    <DoneTodo />
                </Route>

                <Route exact path='/'>
                    <AddTodo />
                    <VisibleTodos />
                </Route>
            </switch>
        </div>

    </Router>
     
)

export default App;
 