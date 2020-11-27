import React from 'react';
import { View, FlatList, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ListThumbnail from '../ListThumbnail';

const ListList = ({ lists, boardId }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={lists.filter((list) => list.boardId === boardId)}
      renderItem={({ item: { id, name, color } }) => (
        <View style={styles.boardContainer}>
          <ListThumbnail
            id={id}
            name={name}
            color={color}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonItem}>
              <Button color="red" title="Delete List" />
            </View>

            <View style={styles.buttonItem}>
              <Button color="green" title="Edit List" />
            </View>
          </View>
        </View>
      )}
      keyExtractor={(list) => list.id.toString()}
    />
  </View>
);

ListList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  boardId: PropTypes.number.isRequired,
};
export default ListList;
