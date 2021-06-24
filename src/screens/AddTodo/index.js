import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setTodoText, addTodo} from '../../redux/actions/addTodoActions';
import Todo from '../../models/Todo';
import {styles} from './style';

const AddTodo = props => {
  const AddTodoState = useSelector(state => state.AddTodo);
  const HomeState = useSelector(state => state.Home);

  const {todoText} = AddTodoState;
  const {todos} = HomeState;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    var t = new Todo(todoText, false);
    dispatch(addTodo(todos, t, props.navigation));
  };

  const {
    root,
    cardContainer,
    textInput,
    submitContainer,
    submitButton,
    submitText,
  } = styles;

  return (
    <View style={root}>
      <View style={cardContainer}>
        <TextInput
          value={todoText}
          style={textInput}
          onChangeText={text => dispatch(setTodoText(text))}
          underlineColorAndroid="#000"
        />
        <View style={submitContainer}>
          <TouchableOpacity onPress={handleSubmit} style={submitButton}>
            <Text style={submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTodo;
