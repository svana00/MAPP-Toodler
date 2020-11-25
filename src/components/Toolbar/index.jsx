import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <View style={styles.toolbarAction}>
      <Text style={styles.clear}>i</Text>
    </View>
    <View style={styles.toolbarAction}>
      <Text style={styles.toolbarActionText}>Boards Overview</Text>
    </View>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>+</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
