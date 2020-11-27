import React from 'react';
import {
 View, Text, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, isFinished, onLongPress, isSelected, flipFinished, onModify
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress = {() => flipFinished(id) }>

    {
          isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} />
            : <></>
    }

    <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }, {backgroundColor: isFinished ? "green" : "white"}]}>
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
      <TouchableOpacity
        onPress = {() => onModify(id)}>
        <FontAwesome name="paint-brush" size={24} color="black" />
      </TouchableOpacity>
    </View>

  </TouchableOpacity>

);

export default TaskThumbnail;
