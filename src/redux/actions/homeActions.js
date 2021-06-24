import {SET_TODOS} from '../types';

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    todos: todos,
  };
};

export const setTodoIsDone = (todos, index, isDone) => {
  return dispatch => {
    var tempTodos = todos;
    tempTodos[index].isDone = isDone;
    dispatch({
      type: SET_TODOS,
      todos: tempTodos,
    });
  };
};

export const deleteTodo = (todos, index) => {
  return dispatch => {
    var tempTodos = todos;
    tempTodos.splice(index, 1);
    dispatch(setTodos(tempTodos));
  };
};
