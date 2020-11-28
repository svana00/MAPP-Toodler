import React from 'react';
import { Picker, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class ListPickerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: '',
      listName: ''
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
            allLists.map(list => (
              <Picker.Item style = {styles.item} key= {list.value} label={list.label} value={list.value} />
              )
            )
          }
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onSubmit(list);
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
