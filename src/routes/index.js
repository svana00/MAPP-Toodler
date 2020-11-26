import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Board from '../views/Board';
import Boards from '../views/Boards';
import Tasks from '../views/Tasks';

export default createAppContainer(createStackNavigator({
  Main,
  Boards,
  Board,
  Tasks,
}));
