import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import CreateBoard from '../../components/CreateBoard';
import BoardList from '../../components/BoardList';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: data.boards,
      isCreateBoardModalOpen: false,
      thumbnailPhoto: '',
      nextBoardId: 3,
    };
  }

  addBoardToState(name, thumbnailPhoto) {
    let { nextBoardId } = this.state;
    nextBoardId += 1;
    const newBoard = {
      id: nextBoardId,
      name,
      thumbnailPhoto,
    };
    const { boards } = this.state;
    this.setState({ boards: [...boards, newBoard], isCreateBoardModalOpen: false, nextBoardId });
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
  }

  async addBoard(name) {
    const { thumbnailPhoto } = this.state;
    if (thumbnailPhoto === '') {
      Alert.alert(
        'Photo need to be added.',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      this.addBoardToState(name, thumbnailPhoto);
      Alert.alert(`${name} has been created!`);
      this.setState({
        isCreateBoardModalOpen: false,
        thumbnailPhoto: '',
      });
    }
  }

  deleteBoard(id) {
    const { boards } = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      boards: boards.filter((board) => board.id !== id),
    });
  }

  render() {
    const { boards, isCreateBoardModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isCreateBoardModalOpen: true })}
          title="Boards Overview"
        />
        <BoardList
          boards={boards}
          deleteBoard={(id) => this.deleteBoard(id)}
        />
        <CreateBoard
          isOpen={isCreateBoardModalOpen}
          closeModal={() => this.setState({ isCreateBoardModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name) => this.addBoard(name)}
        />
      </View>
    );
  }
}

export default Boards;
