import React from 'react';
import {
  Text, View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';

const ConfirmationModal = ({
  isOpen, closeModal, onConfirm, objectName,
}) => (

  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <AntDesign name="delete" size={70} color="black" />
    <Text style={styles.modalTitleText}>
      Delete
      {' '}
      {objectName}
      ?
    </Text>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonItem}>
          <TouchableHighlight onPress={() => { closeModal(); }}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonItem}>
          <TouchableHighlight onPress={() => { onConfirm(); }}>
            <Text style={styles.delete}>
              Delete
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  </Modal>
);

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  objectName: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  objectName: '',
};

export default ConfirmationModal;
