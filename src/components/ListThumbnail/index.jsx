import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const ListThumbnail = ({
  id, name, color, navigation: { navigate },
}) => (
  <View style={{backgroundColor: color,}}>
    <TouchableOpacity onPress={() => navigate('Tasks', { listId: id, listName: name })}>
      <Text style={styles.boardTitle}>{name}</Text>
    </TouchableOpacity>
  </View>
);

ListThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListThumbnail);
