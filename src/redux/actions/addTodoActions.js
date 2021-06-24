import {SET_TODOS, ADD_TODO_SET_TODO_TEXT} from '../types';

export const setTodoText = todoText => {
  return {
    type: ADD_TODO_SET_TODO_TEXT,
    todoText: todoText,
  };
};

export const addTodo = (oldTodos, todo, navigation) => {
  return dispatch => {
    var tempTodos = oldTodos;
    tempTodos.push(todo);
    dispatch({
      type: SET_TODOS,
      todos: tempTodos,
    });
    dispatch(setTodoText(''));
    navigation.goBack();
  };
};
