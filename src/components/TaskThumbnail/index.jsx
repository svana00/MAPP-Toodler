import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, isFinished, onLongPress, isSelected, flipFinished, onModify,
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress={() => flipFinished(id)}
  >

    {
          isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} />
            : <></>
    }

    <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }, { backgroundColor: isFinished ? 'green' : 'white' }]}>
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
        onPress={() => onModify(id)}
      >
        <FontAwesome name="paint-brush" size={24} color="black" />
      </TouchableOpacity>
    </View>

  </TouchableOpacity>

);

TaskThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  flipFinished: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default TaskThumbnail;
