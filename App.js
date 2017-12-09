import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';
import SecUserList from './src/components/SecUserList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <Header headerText={'User Diary'} />
          <SecUserList />
          <Text style={{ alignSelf: 'center', color: 'white' }}>Copyright (c) Nikhil Inc.</Text>
        </View>

      </Provider>
    );
  }
}

