import {connect} from 'react-redux';
import {toggleTodo} f
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos
})



export default connect(mapStateToProps)(TodoList);