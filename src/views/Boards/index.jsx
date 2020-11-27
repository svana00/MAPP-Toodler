import React from 'react';
import { View, Alert } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AddBoardModal from '../../components/AddBoardModal';
import BoardList from '../../components/BoardList';
import ConfirmationModal from '../../components/ConfirmationModal';
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
      isConfirmationOpen: false,
    };
  }

  setupModify(id) {
    this.setState({ currentId: id, isBeingModified: true, isAddBoardModalOpen: true });
  }

  setupDelete(id) {
    this.setState({ currentId: id, isConfirmationOpen: true });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  modify(id, name, description) {
    const { boards, thumbnailPhoto } = this.state;
    const board = {
      id, name, description, thumbnailPhoto,
    };
    if (board.name.length === 0 || board.thumbnailPhoto.length === 0) {
      Alert.alert(
        'Blank fields',
        'Name and thumbnail photo cannot be blank. Please fill them in.',
        [{ text: 'Understood' }],
      );
    } else {
      const newBoards = boards.map((singleBoard) => {
        if (singleBoard.id === board.id) {
          singleBoard.name = board.name;
          singleBoard.thumbnailPhoto = thumbnailPhoto;
          singleBoard.description = description;
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

  addBoardToState(name, description, thumbnailPhoto) {
    let { nextBoardId } = this.state;
    nextBoardId += 1;
    const newBoard = {
      id: nextBoardId,
      name,
      description,
      thumbnailPhoto,
    };
    const { boards } = this.state;
    this.setState({ boards: [...boards, newBoard], isAddBoardModalOpen: false, nextBoardId });
  }

  async addBoard(name, description) {
    const { thumbnailPhoto } = this.state;
    if (thumbnailPhoto === '' || name === '') {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields except description, Please fill it all in',
      );
    } else {
      this.addBoardToState(name, description, thumbnailPhoto);
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
    this.setState({
      isConfirmationOpen: false,
    });
  }

  render() {
    const {
      currentId, boards, isAddBoardModalOpen, isBeingModified, isConfirmationOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddBoardModalOpen: true })}
          title="My boards"
        />
        <BoardList
          boards={boards}
          onDelete={(id) => this.setupDelete(id)}
          onModify={(id) => this.setupModify(id)}
        />
        <AddBoardModal
          id={currentId}
          isOpen={isAddBoardModalOpen}
          closeModal={() => this.setState({ isAddBoardModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name, description) => this.addBoard(name, description)}
          modify={isBeingModified}
          onModify={(id, name, description) => this.modify(id, name, description)}
        />
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          closeModal={() => this.setState({ isConfirmationOpen: false })}
          onConfirm={() => this.deleteBoard(currentId)}
          objectName="Board"
        />
      </View>
    );
  }
}

export default Boards;
