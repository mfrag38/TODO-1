import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Todo from '../../models/Todo';
import {styles} from './style';

const Home = props => {
  const {navigation} = props;
  const {root, appBarContainer, body, fabContainer, fabButton} = styles;
  return (
    <View style={root}>
      {/* <View style={appBarContainer}>
        <Text>Todos</Text>
      </View> */}
      <View style={body}>
        <FlatList />
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
