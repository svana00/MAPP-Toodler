import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

const ListThumbnail = ({
  id, name, color, navigation: { navigate },
}) => (

  <View style={styles.Useless}>
    <View style={{
      flexDirection: 'row',
      height: 200,
      width: 350,
      margin: 10,
      borderRadius: 20,
      backgroundColor: color,
    }}
    >
      <View style={styles.Title}>
        <TouchableOpacity onPress={() => navigate('Tasks', { listId: id, listName: name })}>
          <Text style={styles.listTitle}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ThreeDots}>
        <TouchableOpacity>
          <View style={{padding:30}}>
            <Entypo name="dots-three-horizontal" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
