import { List, Map } from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

const initialTodo = List([]);

export default function(todoList=initialTodo, action) {
    switch(action.type) {
        case ADD_TODO:
            return todoList.push(Map(action.payload));
        case TOGGLE_TODO:
            return todoList.map(item => {
                if(item.get('id') === action.payload) {
                    return item.update('isDone', isDone => !isDone);
                } else {
                    return item;
                }
            })
        default:
            return todoList;
    }
}