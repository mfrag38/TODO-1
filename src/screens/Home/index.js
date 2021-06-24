import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {setTodoIsDone, deleteTodo} from '../../redux/actions/homeActions';
// import Todo from '../../models/Todo';
import {styles} from './style';

const Home = props => {
  const {navigation} = props;
  const HomeState = useSelector(state => state.Home);
  const {todos} = HomeState;

  const dispatch = useDispatch();

  const handleDone = (index, v) => {
    dispatch(setTodoIsDone(todos, index, v));
  };

  const handleDelete = index => {
    dispatch(deleteTodo(todos, index));
  };

  const renderTodo = (index, item) => {
    const {todoContainer, deleteContainer, deleteButton} = styles;

    return (
      <View style={todoContainer}>
        <BouncyCheckbox
          isChecked={item.isDone}
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: 'red'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={isChecked => handleDone(index, isChecked)}
        />
        <Text>{item.name}</Text>
        <View style={deleteContainer}>
          <TouchableOpacity
            style={deleteButton}
            onPress={() => handleDelete(index)}>
            <Icon name="close" color={'#fff'} size={16} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const {
    root,
    body,
    safeContainer,
    fabContainer,
    fabButton,
    listContentContainer,
  } = styles;

  return (
    <View style={root}>
      <View style={body}>
        <SafeAreaView style={safeContainer}>
          <FlatList
            keyExtractor={(item, index) => `${index}-${JSON.stringify(item)}`}
            data={todos}
            renderItem={item => renderTodo(item.index, item.item)}
            contentContainerStyle={listContentContainer}
          />
        </SafeAreaView>
        <View style={fabContainer}>
          <TouchableOpacity
            style={fabButton}
            onPress={() => {
              navigation.navigate('Add Todo');
            }}>
            <Icon name="plus" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
