import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const taskToolbar = ({ hasSelectedTasks, onAdd, onRemove, listName }) => (
  <View styleName="horizontal" style = { styles.toolbar }>
      <Text style={ styles.toolbarActionText }>`${ listName }`</Text>

      <TouchableHighlight
            style={ styles.toolbarAction }
            onPress={ onAdd }>
            <Text style={ styles.toolbarActionText }>Add</Text>
        </TouchableHighlight>

      <TouchableHighlight
          style = { styles.toolbarAction }
          onPress = { onRemove }>
          <Text style={ [ styles.toolbarActionText, !hasSelectedTasks ? { color: 'rgba(155, 155, 155, .5)' } : {} ] }>Delete</Text>
      </TouchableHighlight>
  </View>
);

export default taskToolbar
