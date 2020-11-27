import React from 'react';
import {
  TouchableHighlight, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';

const ConfirmationModal = ({ isOpen, closeModal, onCancel, onConfirm}) => (

  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <AntDesign name="closecircleo" size={24} color="black" />
    <Text style={styles.modalTitleText}>
      Are You Sure?
    </Text>
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <View style={styles.cancel}>
          <TouchableHighlight>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.confirm}>
          <TouchableHighlight>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>

    <View style={styles.container} />
  </Modal>
);

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
