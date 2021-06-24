import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import AddTodo from '../screens/AddTodo';

const MainStack = createStackNavigator();

const MainStackNavigator = props => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Add Todo" component={AddTodo} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
