import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Button } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards, onDelete, onModify }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({
        item: {
          id, name, description, thumbnailPhoto,
        },
      }) => (
        <View style={styles.boardContainer}>
          <BoardThumbnail
            id={id}
            name={name}
            description={description}
            thumbnailPhoto={thumbnailPhoto}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonItem}>
              <Button color="red" title="Delete Board" onPress={() => { onDelete(id); }} />
            </View>

            <View style={styles.buttonItem}>
              <Button color="green" title="Edit Board" onPress={() => { onModify(id, name, description); }} />
            </View>
          </View>
        </View>
      )}
      keyExtractor={(board) => board.id.toString()}
    />
  </View>
);

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default BoardList;
