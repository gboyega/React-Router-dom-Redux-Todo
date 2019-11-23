import { connect } from 'react-redux';
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos.filter(t => !t.completed)
})

const mapDispatchToProps = dispatch => (
    {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 