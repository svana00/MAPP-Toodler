import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, TextInput,TouchableHighlight, Text } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddTask extends React.Component {

  state = {
    name: "",
    description: "",
  }

  genericInputHandler(name, value) {
    this.setState({[name]: value})
  }

  render() {
    const {name, description} = this.state;
    const {id, isOpen, closeModal, addTask, modify, onModify} = this.props
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
            <TextInput
                style={styles.textInput}
                placeholder="Please enter the task"
                value = {name}
                onChangeText={text => this.genericInputHandler('name', text)} />
            <TextInput
                style={styles.textInput}
                placeholder="Please enter a description for the task"
                value = {description}
                onChangeText={text => this.genericInputHandler('description',text)}/>
            <TouchableOpacity
              onPress={() => {modify  ? onModify({id, name, description}) : addTask({name, description}) }}>
              <Text>Add Task</Text>
            </TouchableOpacity>
      </Modal>
    );
  }
}


export default AddTask;
