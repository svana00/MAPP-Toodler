import React from 'react';
import { View, Alert } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AddBoardModal from '../../components/AddBoardModal';
import BoardList from '../../components/BoardList';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: data.boards,
      isAddBoardModalOpen: false,
      isBeingModified: false,
      currentId: 0,
      thumbnailPhoto: '',
      nextBoardId: 3,
    };
  }

  setupModify(id) {
    this.setState({ currentId: id, isBeingModified: true, isAddBoardModalOpen: true });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  modify(id, name) {
    const { boards, thumbnailPhoto } = this.state;
    const board = { id, name, thumbnailPhoto };
    if (board.name.length === 0 || board.thumbnailPhoto.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      const newBoards = boards.map((singleBoard) => {
        if (singleBoard.id === board.id) {
          singleBoard.name = board.name;
          singleBoard.thumbnailPhoto = thumbnailPhoto;
        }
        return singleBoard;
      });
      this.setState({
        boards: newBoards, isAddBoardModalOpen: false, isBeingModified: false, currentId: 0,
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
    this.setState({ boards: [...boards, newBoard], isAddBoardModalOpen: false, nextBoardId });
  }

  async addBoard(name) {
    const { thumbnailPhoto } = this.state;
    if (thumbnailPhoto === '' || name === '') {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields except description, Please fill it all in',
      );
    } else {
      this.addBoardToState(name, thumbnailPhoto);
      Alert.alert(
        'Successful!',
        `${name} has been created!`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
      this.setState({
        isAddBoardModalOpen: false,
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
      currentId, boards, isAddBoardModalOpen, isBeingModified,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddBoardModalOpen: true })}
          title="My boards"
        />
        <BoardList
          boards={boards}
          deleteBoard={(id) => this.deleteBoard(id)}
          onModify={(id) => this.setupModify(id)}
        />
        <AddBoardModal
          id={currentId}
          isOpen={isAddBoardModalOpen}
          closeModal={() => this.setState({ isAddBoardModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name) => this.addBoard(name)}
          modify={isBeingModified}
          onModify={(id, name) => this.modify(id, name)}
        />
      </View>
    );
  }
}

export default Boards;
