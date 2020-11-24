import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';
<<<<<<< Updated upstream
import Board from '../views/Board';

export default createAppContainer(createStackNavigator({
  Main,
  Board
=======
import Boards from '../views/Boards';

export default createAppContainer(createStackNavigator({
  Main,
  Boards,
>>>>>>> Stashed changes
}));
