import React from 'react';
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
      isBeingModified: false,
      currentId: '',
      thumbnailPhoto: '',
      nextBoardId: 3,
    };
  }

  setupModify(id) {
    this.setState({ currentId: id, isBeingModified: true, isCreateBoardModalOpen: true });
  }

  modify(board) {
    const { boards } = this.state;
    if (board.name.length === 0 || board.thumbnailPhoto.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      for (let i in boards) {
        if (boards[i].id == board.id) {
          boards[i].name = board.name;
          boards[i].description = board.description;
        }
      }
      this.setState({
        boards, isCreateBoardModalOpen: false, isBeingModified: false, currentId: '',
      });
    }
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ thumbnailPhoto: photo }); }
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
    const {
      currentId, boards, isCreateBoardModalOpen, isBeingModified,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isCreateBoardModalOpen: true })}
          title="My boards"
        />
        <BoardList
          boards={boards}
          deleteBoard={(id) => this.deleteBoard(id)}
          onModify={(id) => this.setupModify(id)}
        />
        <CreateBoard
          id={currentId}
          isOpen={isCreateBoardModalOpen}
          closeModal={() => this.setState({ isCreateBoardModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name) => this.editBoard(name)}
          modify={isBeingModified}
          onModify={(id) => this.modify(id)}
        />
      </View>
    );
  }
}

export default Boards;
