import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <BoardThumbnail id={id} name={name} thumbnailPhoto={thumbnailPhoto} />
      )}
      keyExtractor={(board) => board.id.toString()}
    />
  </View>
);

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
};

export default BoardList;
