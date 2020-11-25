import React from 'react';
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
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardList;
