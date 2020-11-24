import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';

export default createAppContainer(createStackNavigator({
  Main
}));
