import React from 'react';
import { TouchableOpacity, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modifyName: '',
      modifyDescription: ''
    };
  }

  genericInputHandler(name, value) {
    console.log("Changing")
    this.setState({ [name]: value });
  }

  render() {
    const {modifyName, modifyDescription} = this.state
    const {
      id, isOpen, closeModal, addTask, modify, onModify, name, description
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={styles.modalTitleText}>
          Add Task
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={name}
          value={modifyName}
          onChangeText={(text) => this.genericInputHandler('modifyName', text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={description}
          value={modifyDescription}
          onChangeText={(text) => this.genericInputHandler('modifyDescription', text)}
        />
        <TouchableOpacity
          onPress={() => { modify ? onModify({ id, modifyName, modifyDescription }) : addTask({ modifyName, modifyDescription }); this.setState({
            modifyName: '',
            modifyDescription: '',
          });}}
        >
          <Text style={styles.submitButton}>Submit Changes</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

AddTask.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  modify: PropTypes.bool.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default AddTask;
