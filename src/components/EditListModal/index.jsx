import React from 'react';
import {
  TouchableHighlight, TextInput, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class EditListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
    };
  }

  render() {
    const {
      isOpen, closeModal, onModify, id, oldName,

    } = this.props;

    // will change into this.state.color at the submit stage
    const { name, color } = this.state;

    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={styles.modalTitleText}>
          Edit List
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          placeholder={oldName}
          maxLength={29}
          style={styles.textInput}
        />
        <View style={styles.container}>
          <TouchableHighlight onPress={() => this.setState({ color: '#EB9694' })}>
            <View style={[styles.pink, { borderWidth: (color === '#EB9694' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#FAD0C3' })}>
            <View style={[styles.orange, { borderWidth: (color === '#FAD0C3' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#FEF3BD' })}>
            <View style={[styles.yellow, { borderWidth: (color === '#FEF3BD' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#C1E1C5' })}>
            <View style={[styles.green, { borderWidth: (color === '#C1E1C5' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#BEDADC' })}>
            <View style={[styles.bluegreen, { borderWidth: (color === '#BEDADC' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#C4DEF6' })}>
            <View style={[styles.blue, { borderWidth: (color === '#C4DEF6' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#BED3F3' })}>
            <View style={[styles.darkblue, { borderWidth: (color === '#BED3F3' ? 1 : 0) }]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({ color: '#D4C4FB' })}>
            <View style={[styles.purple, { borderWidth: (color === '#D4C4FB' ? 1 : 0) }]} />
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            onModify(
              id,
              name || oldName,
              color,
            );
            this.setState({ name: '', color: '' });
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

EditListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  oldName: PropTypes.string.isRequired,
};

export default EditListModal;
