import React from 'react';
import {
  Text, View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';

const ConfirmationModal = ({
  isOpen, closeModal, onConfirm,
}) => (

  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <AntDesign name="closecircleo" size={40} color="red" />
    <Text style={styles.modalTitleText}>
      Are You Sure?
    </Text>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonItem}>
          <TouchableHighlight onPress={() => { closeModal(); }}>
            <Text style={{ color: 'green', fontSize: 20 }}>Cancel</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonItem}>
          <TouchableHighlight onPress={() => { onConfirm(); }}>
            <Text style={{ color: 'red', fontSize: 20 }}>Delete</Text>
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
};

export default ConfirmationModal;
