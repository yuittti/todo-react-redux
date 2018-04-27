import { ADD_TODO, TOGGLE_TODO } from './types';
import { uid } from '../utils/utils';

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            isDone: false,
            text: text
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}