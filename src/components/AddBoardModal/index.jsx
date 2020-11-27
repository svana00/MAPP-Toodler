import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handlePress() {
    const { name, description } = this.state;
    const {
      id, onModify, modify, onSubmit,
    } = this.props;
    if (modify) {
      onModify(id, name, description);
    } else {
      onSubmit(name, description);
    }
    this.setState({ name: '', description: '' });
  }

  render() {
    const {
      isOpen, closeModal, takePhoto, selectFromCameraRoll,
    } = this.props;
    const { name, description } = this.state;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <View style={styles.modalStyle}>
          <TextInput
            onChangeText={(text) => this.setState({ name: text })}
            value={name}
            placeholder="My board name"
            maxLength={29}
          />
          <TextInput
            onChangeText={(text) => this.setState({ description: text })}
            value={description}
            placeholder="Description of board (optional)"
            maxLength={40}
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
            <Text>Submit Changes</Text>
          </TouchableHighlight>
        </View>
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
