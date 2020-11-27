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
      isAddBoardModalModalOpen: false,
      isBeingModified: false,
      currentId: 0,
      thumbnailPhoto: '',
      nextBoardId: 3,
    };
  }

  setupModify(id) {
    this.setState({ currentId: id, isBeingModified: true, isAddBoardModalModalOpen: true });
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
        boards, isAddBoardModalModalOpen: false, isBeingModified: false, currentId: '',
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
    this.setState({ boards: [...boards, newBoard], isAddBoardModalModalOpen: false, nextBoardId });
  }

  async addBoard(name) {
    const { thumbnailPhoto } = this.state;
    if (thumbnailPhoto === '') {
      Alert.alert(
        'Photo needs to be added.',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      this.addBoardToState(name, thumbnailPhoto);
      Alert.alert(`${name} has been created!`);
      this.setState({
        isAddBoardModalModalOpen: false,
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
      currentId, boards, isAddBoardModalModalOpen, isBeingModified,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddBoardModalModalOpen: true })}
          title="My boards"
        />
        <BoardList
          boards={boards}
          deleteBoard={(id) => this.deleteBoard(id)}
          onModify={(id) => this.setupModify(id)}
        />
        <AddBoardModal
          id={currentId}
          isOpen={isAddBoardModalModalOpen}
          closeModal={() => this.setState({ isAddBoardModalModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name) => this.modify(name)}
          modify={isBeingModified}
          onModify={(id) => this.modify(id)}
        />
      </View>
    );
  }
}

export default Boards;
