import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Login from './screens/Login';
import AddClassPage from './screens/AddClassPage';

export const Navigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed',
        drawerLabel: <View />,
      }),
    },
    Home: { screen: Home },
    AddClass: {
      screen: AddClassPage,
      navigationOptions: () => ({
        title: 'Add Class'
      })
    }
  }, {
    initialRouteName: 'AddClass'
  },
);

export default createAppContainer(Navigator);
