import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import navigation from './src/Reducers/Navigation/NavigationReducer';

import Navigator from './src/Navigator';

const reducer = combineReducers({ navigation });
const store = createStore(reducer, applyMiddleware(logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
