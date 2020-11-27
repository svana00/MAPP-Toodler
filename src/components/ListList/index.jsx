import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import ListThumbnail from '../ListThumbnail';

const ListList = ({ lists, boardId}) => (
  <>
    <Text>{console.log('hi', lists)}</Text>
    <View style={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={lists.filter((list) => list.boardId === boardId)}
        renderItem={({ item: { id, name, color, boardId } }) => (
          <ListThumbnail id={id} name={name} color={color} />
        )}
        keyExtractor={(list) => list.id.toString()}
      />
    </View>
  </>
);

// ListList.PropTypes

export default ListList;
