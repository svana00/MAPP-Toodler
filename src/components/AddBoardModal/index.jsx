import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, Text, TextInput, TouchableHighlight,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handlePress() {
    const { name } = this.state;
    const {
      id, onModify, modify, onSubmit,
    } = this.props;
    if (modify) {
      onModify(id, name);
    } else {
      onSubmit(name);
    }
    this.setState({ name: '' });
  }

  render() {
    const {
      isOpen, closeModal, takePhoto, selectFromCameraRoll,
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
          onPress={() => { this.handlePress(); }}
        >
          <Text>Create Board</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AddBoardModal.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  selectFromCameraRoll: PropTypes.func.isRequired,
  modify: PropTypes.bool.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default AddBoardModal;
