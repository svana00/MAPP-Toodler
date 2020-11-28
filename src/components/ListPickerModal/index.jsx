import React from 'react';
import {View, Picker, Text, TouchableOpacity} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import PropTypes from 'prop-types';


class ListPickerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: '',
      listName: ''
    };
  }

  updateList(list){
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const {
      isOpen, closeModal, onSubmit, allLists
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
          style={{ height: 100, width: 200 }}
          selectedValue={list}
          onValueChange={value => this.updateList(value)}>
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
  })).isRequired
};

export default ListPickerModal;
