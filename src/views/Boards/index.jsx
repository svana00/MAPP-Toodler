import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';

class Boards extends React.Component {
  state = {
    boards: data.boards 
  }
  render() {
    const {boards} = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <BoardList boards={boards} />
      </View>
    );
  }
}

export default Boards;
