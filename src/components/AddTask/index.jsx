import React from 'react';
import { TouchableOpacity, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, description } = this.state;
    const {
      id, isOpen, closeModal, addTask, modify, onModify,
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
          placeholder="Please enter the task"
          value={name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Please enter a description for the task"
          value={description}
          onChangeText={(text) => this.genericInputHandler('description', text)}
        />
        <TouchableOpacity
          onPress={() =>
            {modify  ? onModify({id, name, description}) : addTask({name, description}) }}
        >
          <Text style={styles.submitButton}>Submit Changes</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

AddTask.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  modify: PropTypes.bool.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default AddTask;
