import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Button } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards, deleteBoard }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <View style={styles.boardContainer}>
          <BoardThumbnail
            id={id}
            name={name}
            thumbnailPhoto={thumbnailPhoto}
            deleteBoard={deleteBoard}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonItem}>
              <Button color="red" title="Delete Board" onPress={() => { deleteBoard(id); }} />
            </View>

            <View style={styles.buttonItem}>
              <Button color="green" title="Edit Board" onPress={() => { deleteBoard(id); }} />
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
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default BoardList;
