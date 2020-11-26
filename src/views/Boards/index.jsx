import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import CreateBoard from '../../components/CreateBoard';
import BoardList from '../../components/BoardList';
import {takePhoto, selectFromCameraRoll} from '../../services/imageService';
import { addBoard } from '../../actions/boards';

class Boards extends React.Component {
  state = {
    boards: data.boards,
    isCreateBoardModalOpen: false,
    thumbnailPhoto: '',
  }

  async takePhoto() {
      const photo = await takePhoto();
      if (photo.length > 0) { await this.addImage(photo); }
  }

  async selectFromCameraRoll() {
      const photo = await selectFromCameraRoll();
      if (photo.length > 0) { await this.addImage(photo); }
  }

  async addBoard(name) {
    const { thumbnailPhoto } = this.state;
    const { addBoardToState } = this.props;
    if (thumbnailPhoto === '') {
      Alert.alert(
        'A photo is is required!',
        'You can add a photo by selecting the camera or albom icon',
      );
    } else {
      addBoardToState(name, thumbnailPhoto);
      this.setState({
        isAddModalOpen: false,
        thumbnailPhoto: '',
      });
    }
  }

  render() {
    const {boards, isCreateBoardModalOpen} = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
            onAdd={ () => this.setState({ isCreateBoardModalOpen: true }) }
            title ='Boards Overview'/>
        <BoardList
            boards={boards} />
        <CreateBoard
          isOpen={isCreateBoardModalOpen}
          closeModal={() => this.setState({isCreateBoardModalOpen: false})}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
          onSubmit={(name) => this.addBoard(name)}/>
      </View>
    );
  }
}

Boards.propTypes = {
  addBoardToState: PropTypes.func.isRequired,
};

export default Boards;
