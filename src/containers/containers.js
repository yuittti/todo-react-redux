import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { addTodo, toggleTodo } from '../actions/todoActions';

export const TodoWrapper = connect(
    function mapStateToProps(state) {
        return { todoList: state }
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(TodoList);