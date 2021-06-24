import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import AddTodoReducer from './AddTodoReducer';

export default combineReducers({
  Home: HomeReducer,
  AddTodo: AddTodoReducer,
});
