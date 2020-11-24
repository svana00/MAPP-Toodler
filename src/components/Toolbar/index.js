import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <Text>All Boards</Text>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add board</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
