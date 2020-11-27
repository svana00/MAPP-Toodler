import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, isFinished, isSelected, flipFinished,
}) => (
  <View>
    <TouchableOpacity onPress={() => flipFinished(id)}>
      {
            isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} />
              : <></>
      }
      <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }, { backgroundColor: isFinished ? 'green' : 'white' }]}>
        <Text style={styles.toolbarActionText}>
          Task:
          {' '}
          {name}
          {'\n'}
          {' '}
          Description:
          {' '}
          {description}
        </Text>
      </View>

    </TouchableOpacity>
  </View>
);

TaskThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  flipFinished: PropTypes.func.isRequired,
};

export default TaskThumbnail;
