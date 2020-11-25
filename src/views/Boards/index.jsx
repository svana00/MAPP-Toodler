import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';
import BoardList from '../../components/BoardList';

class Boards extends React.Component {
  state = {
    boards: data.boards,
    isAddModalOpen: false,
  }
  takePhoto() {

  }
  selectFromCameraRoll() {

  }
  render() {
    const {boards, isAddModalOpen} = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
        onAdd = {() => this.setState({isAddModalOpen: true })}/>
        <BoardList
        boards={boards} />
        <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setState({isAddModalOpen: false})}
        takePhoto={() => this.takePhoto()}
        selectFromCameraRoll={() => this.selectFromCameraRoll()}/>
      </View>
    );
  }
}

export default Boards;
