import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

const AddTodo = props => {
  const [theTodo, setTheTodo] = useState('');

  return (
    <View>
      <TextInput
        value={theTodo}
        style={{color: '#000'}}
        onChangeText={text => setTheTodo(text)}
        underlineColorAndroid="#000"
      />
      <View>
        <TouchableOpacity onPress={() => console.log('Teet')}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;
