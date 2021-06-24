import {ADD_TODO} from '../types';

const initState = {
  todos: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};
