import React from 'react';
import { Picker, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class ListPickerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
    };
  }

  updateList(list) {
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const {
      isOpen, closeModal, onSubmit, allLists,
    } = this.props;
    console.log('here', allLists);
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={styles.modalTitleText}>
          Move task
        </Text>
        <Picker
          style={{ height: 240, width: 200 }}
          selectedValue={list}
          onValueChange={(value) => this.updateList(value)}
        >
          {
            allLists.map((list) => (
              <Picker.Item style={styles.item} label={list.label} value={list.value} />
            ))
          }
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onSubmit(this.list);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

ListPickerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  allLists: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListPickerModal;
