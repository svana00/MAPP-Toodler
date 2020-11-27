import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import TaskThumbnail from '../TaskThumbnail';

const TaskList = ({ tasks, selectedTasks, onLongPress, flipFinished, onModify }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={ tasks }
      extraData={selectedTasks}
      renderItem={ ({ item: { id, name, description, isFinished,listId } }) => {
        return (
          <TaskThumbnail
              id={ id }
              name={ name }
              description={ description }
              isFinished={ isFinished }
              listId = { listId }
              isSelected={ selectedTasks.indexOf(id) !== -1}
              onLongPress = {onLongPress}
              flipFinished = {flipFinished}
              onModify = {onModify}/>
        );
      }}
      keyExtractor={task => task.id.toString()}
    />
  </View>
);

export default TaskList;
