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
    };
  }

  render() {
    const {
      isOpen, closeModal, onModify, selectedList,
    } = this.props;

    // will change into this.state.color at the submit stage
    let colour = selectedList.color;
    const { name } = selectedList;

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
          placeholder={name}
          maxLength={29}
          style={styles.textInput}
        />
        <View style={styles.container}>
          <TouchableHighlight onPress={() => { colour = '#EB9694'; }}>
            <View style={styles.pink} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#FAD0C3'; }}>
            <View style={styles.orange} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#FEF3BD'; }}>
            <View style={styles.yellow} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#C1E1C5'; }}>
            <View style={styles.green} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#BEDADC'; }}>
            <View style={styles.bluegreen} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#C4DEF6'; }}>
            <View style={styles.blue} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#BED3F3'; }}>
            <View style={styles.darkblue} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { colour = '#D4C4FB'; }}>
            <View style={styles.purple} />
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            console.log(
              selectedList.id,
              this.state.name ? this.state.name : name,
              colour || selectedList.color,
            );
            onModify(
              selectedList.id,
              this.state.name ? this.state.name : name,
              colour || selectedList.color,
            );
            this.setState({ name: '' });
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
  selectedList: PropTypes.string.isRequired,
};

export default EditListModal;
