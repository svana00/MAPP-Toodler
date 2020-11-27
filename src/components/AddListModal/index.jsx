import React from 'react';
import {
  TouchableHighlight, TextInput, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class AddListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
    };
  }

  render() {
    const { name, color } = this.state;
    const {
      isOpen, closeModal, onSubmit,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={styles.modalTitleText}>
          Create List
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="List name"
          maxLength={29}
          style={styles.textInput}
        />

        <View style={styles.container}>
          <TouchableHighlight onPress={() => { this.setState({ color: '#EB9694' }); }}>
            <View style={styles.pink} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#FAD0C3' })}>
            <View style={styles.orange} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#FEF3BD' })}>
            <View style={styles.yellow} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#C1E1C5' })}>
            <View style={styles.green} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#BEDADC' })}>
            <View style={styles.bluegreen} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#C4DEF6' })}>
            <View style={styles.blue} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#BED3F3' })}>
            <View style={styles.darkblue} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#D4C4FB' })}>
            <View style={styles.purple} />
          </TouchableHighlight>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onSubmit(this.state.name, this.state.color);
            this.setState({
              name: '',
              color: '',
            });
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

AddListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddListModal;
