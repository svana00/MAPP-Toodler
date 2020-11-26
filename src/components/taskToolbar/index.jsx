import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const TaskToolbar = ({ hasSelectedTasks, onAdd, onRemove, listName }) => (
  <View styleName="horizontal" style = { styles.toolbar }>
      <Text style={ styles.toolbarHeading }>{ listName }</Text>

      <TouchableHighlight
            style={ styles.toolbarAction }
            onPress={ onAdd }>
            <Text style={ styles.toolbarActionText }>Add</Text>
        </TouchableHighlight>

      <TouchableHighlight
          style = { styles.toolbarAction }
          onPress = { onRemove }>
          <Text style={styles.toolbarActionText}>Delete</Text>
      </TouchableHighlight>
  </View>
);

export default TaskToolbar;
