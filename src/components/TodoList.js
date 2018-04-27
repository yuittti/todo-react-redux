import React from 'react';
import TodoItem from './TodoItem';
import {toggleTodo, addTodo} from '../actions/todoActions'

const TodoList = (props) => {
    const { todoList, toggleTodo, addTodo } = props;

    const onSubmit = (event) => {
        let input = event.target;
        let text = input.value;
        let isEnterKey = (event.which == 13);
        let isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div className="todo">
            <input type='text' 
                className='todo__entry'
                placeholder='Add todo'
                onKeyDown={onSubmit} />
                
            <ul className="todo__list">
                {todoList && todoList.map(todoItem => (
                    <li key={todoItem.get('id')} 
                        className="todo__item"
                        onClick={toggleClick(todoItem.get('id'))}>
                        <TodoItem todo={todoItem} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;