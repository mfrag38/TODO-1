import {ADD_TODO_SET_TODO_TEXT} from '../types';

const initState = {
  todoText: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_SET_TODO_TEXT:
      return {
        ...state,
        todoText: action.todoText,
      };
    default:
      return state;
  }
};
