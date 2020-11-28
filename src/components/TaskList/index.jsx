import React from 'react';
import { View, FlatList, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TaskThumbnail from '../TaskThumbnail';

const TaskList = ({
  tasks, flipFinished, onModify, onRemove, onMove,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({
        item: {
          id, name, description, isFinished, listId,
        },
      }) => (
        <View style={styles.boardContainer}>
          <TaskThumbnail
            id={id}
            name={name}
            description={description}
            isFinished={isFinished}
            listId={listId}
            flipFinished={flipFinished}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonItem}>
              <Button color="red" title="Delete Task" onPress={() => { onRemove(id); }} />
            </View>

            <View style={styles.buttonItem}>
              <Button color="green" title="Edit Task" onPress={() => { onModify(id); }} />
            </View>
            <View style={styles.buttonItem}>
              <Button color="blue" title="Move Task" onPress={() => { onMove(id); }} />
            </View>
          </View>
        </View>
      )}
      keyExtractor={(task) => task.id.toString()}
    />
  </View>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number,
  })).isRequired,
  flipFinished: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default TaskList;
