import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';
import Board from '../views/Board';

export default createAppContainer(createStackNavigator({
  Main,
  Board
}));
