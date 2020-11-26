import React from 'react';
import {
 View, Text, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, isFinished, onLongPress, isSelected,
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
  >

    {
          isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} />
            : <></>
        }

    <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }]}>
      <Text style={styles.toolbarActionText}>
        task:
        {name}
        {' '}
        {'\n'}
        {' '}
        description:
        {' '}
        {description}
      </Text>
    </View>

  </TouchableOpacity>
);

export default TaskThumbnail;
