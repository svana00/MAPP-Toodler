import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, Text, TextInput, TouchableHighlight,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      thumbnailPhoto: '',
    };
  }

  render() {
    const { name, thumbnailPhoto } = this.state;
    const {
      id, isOpen, closeModal, takePhoto, selectFromCameraRoll, onSubmit, modify, onModify
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text>
          Enter the desired title for this board
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="My board name"
          maxLength={29}
        />
        <TouchableOpacity
          onPress={() => takePhoto()}
        >
          <Entypo style={styles.icon} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectFromCameraRoll()}
        >
          <Entypo style={styles.icon} name="image" />
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => { modify ? onModify({id, name, thumbnailPhoto}) : onSubmit({name}); }}
        >
          <Text>Create Board</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

CreateBoard.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  selectFromCameraRoll: PropTypes.func.isRequired,
  modify: PropTypes.bool.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default CreateBoard;
