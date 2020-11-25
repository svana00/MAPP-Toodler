import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <View style={styles.toolbarAction}>
      <Text>i</Text>
    </View>
    <View style={styles.toolbarAction}>
      <Text>Boards Overview</Text>
    </View>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add board</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
