import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './components/Home';

export const Navigator = createDrawerNavigator({
    Home: { screen: Home }
}, {
        initialRouteName: 'Home'
    });

export default createAppContainer(Navigator);