import {connect} from 'react-redux';
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => (
    {
        toggleTodo: id => dispatch(toggleTodo())
    }
)



export default connect(mapStateToProps)(TodoList);