import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const BoardThumbnail = ({
  id, name, description, thumbnailPhoto, navigation: { navigate },
}) => {
  let text;
  if (description) {
    text = <Text style={styles.boardTitle}>{description}</Text>;
  }
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Board', { boardId: id, boardName: name, boardDescription: description })}>

        <Image source={{ uri: thumbnailPhoto }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={styles.boardTitle}>{name}</Text>
      {text}
    </View>
  );
};

BoardThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnailPhoto: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

BoardThumbnail.defaultProps = {
  description: '',
};

export default withNavigation(BoardThumbnail);
