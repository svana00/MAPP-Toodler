import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TaskThumbnail from '../TaskThumbnail';

const TaskList = ({
  tasks, selectedTasks, onLongPress, flipFinished, onModify,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      extraData={selectedTasks}
      renderItem={({
        item: {
          id, name, description, isFinished, listId,
        },
      }) => (
        <TaskThumbnail
          id={id}
          name={name}
          description={description}
          isFinished={isFinished}
          listId={listId}
          isSelected={selectedTasks.indexOf(id) !== -1}
          onLongPress={onLongPress}
          flipFinished={flipFinished}
          onModify={onModify}
        />
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
    listId: PropTypes.number.isRequired,
  })).isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  flipFinished: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
};

export default TaskList;
