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
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/done'>Done</Link></li>
                    <li><Link to='/undone'>Undone</Link></li>
                </ul>
            </nav>
            <Switch>
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
            </Switch>
        </div>

    </Router>
     
)

export default App;
 