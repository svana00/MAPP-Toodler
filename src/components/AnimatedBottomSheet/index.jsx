import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, Text, TextInput, TouchableHighlight,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AnimatedBottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose
      >
      </Modal>
    );
  }
}

export default AnimatedBottomSheet;
