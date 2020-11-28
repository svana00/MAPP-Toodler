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
      selectedBoard: { id: 0, name: '', description: '' },
      thumbnailPhoto: '',
      nextBoardId: 3,
      isConfirmationOpen: false,
    };
  }

  setupModify(id, name, description) {
    this.setState({
      selectedBoard: {
        id, name, description,
      },
    });
    this.setState({
      currentId: id,
      isBeingModified: true,
      isAddBoardModalOpen: true,
    });
  }

  setupDelete(id) {
    this.setState({ currentId: id, isConfirmationOpen: true });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  modify(id, name, description) {
    const { boards, thumbnailPhoto, selectedBoard } = this.state;
    const board = {
      id, name, description, thumbnailPhoto,
    };
    const newBoards = boards.map((singleBoard) => {
      if (singleBoard.id === board.id) {
        if (thumbnailPhoto === '') {
          setTimeout(() => {
            Alert.alert(
              'Blank Photo',
              'Please use a photo from your camera roll/take a picture',
              [
                {
                  text: 'OK',
                  onPress: () => {},
                },
              ],
              { cancelable: false },
            );
          }, 500);
        } else {
          if (name !== '') {
            singleBoard.name = board.name;
          } else {
            singleBoard.name = selectedBoard.name;
          }
          if (description !== '') {
            singleBoard.description = board.description;
          } else {
            singleBoard.description = selectedBoard.description;
          }
          singleBoard.thumbnailPhoto = thumbnailPhoto;
        }
      }
      return singleBoard;
    });
    this.setState({
      boards: newBoards, isAddBoardModalOpen: false, isBeingModified: false, currentId: 0,
    });
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
      this.setState({
        isAddBoardModalOpen: false,
        thumbnailPhoto: '',
      });
      setTimeout(() => {
        Alert.alert(
          'Successful!',
          `${name} has been created!`,
          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          { cancelable: false },
        );
      }, 500);
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
      currentId,
      boards,
      isAddBoardModalOpen,
      isBeingModified,
      isConfirmationOpen,
      selectedBoard,
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
          onModify={(id, name, description) => this.setupModify(id, name, description)}
        />
        <AddBoardModal
          id={selectedBoard.id}
          oldDescription={selectedBoard.description}
          oldName={selectedBoard.name}
          isOpen={isAddBoardModalOpen}
          closeModal={() => this.setState({ isAddBoardModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name, description) => this.addBoard(name, description)}
          modify={isBeingModified}
          onModify={(id, name, description) => this.modify(id, name, description)}
          isBeingModified={isBeingModified}
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
