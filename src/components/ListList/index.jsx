import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const ListList = ({ lists, boardId }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={lists.filter((list) => list.boardId === boardId)}
      renderItem={({
        item: {
          id, name, color, boardId,
        },
      }) => (
        <BoardThumbnail id={id} name={name} color={color} boardId={boardId} />
      )}
      keyExtractor={(list) => list.id.toString()}
    />
  </View>
);

export default ListList;
