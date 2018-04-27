import React from 'react';

const TodoItem = (props) => {
    const { todo } = props;

    if (todo.get('isDone')) {
        return <strike>{ todo.get('text') }</strike>;
    } else {
        return <span>{ todo.get('text') }</span>;
    }
}

export default TodoItem;