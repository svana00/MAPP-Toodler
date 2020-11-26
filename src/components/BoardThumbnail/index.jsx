import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, ImageBackground, Button,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const BoardThumbnail = ({
  id, name, thumbnailPhoto, navigation: { navigate }, deleteBoard,
}) => (

  <TouchableOpacity onPress={() => navigate('Board', { boardId: id, boardName: name })}>

    <ImageBackground source={{ uri: thumbnailPhoto }} style={styles.image} resizeMode="cover">
      <View style={{
        position: 'absolute', top: 20, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text style={styles.boardTitle}>{name}</Text>
        <Button color="#515b6b" title="Delete Board" onPress={() => { deleteBoard(id); }} />
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

BoardThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default withNavigation(BoardThumbnail);
