import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import TaskThumbnail from '../TaskThumbnail';

const TaskList = ({ tasks, selectedTasks, onLongPress }) => (
  <View>
    <FlatList
      numColumns={1}
      data={ boards }
      extraData={selectedTasks}
      renderItem={({ item: { id, name, description, isFinished,listId } }) => (
        <TaskThumbnail id={id} name={name} thumbnailPhoto={thumbnailPhoto} />
      )}
      keyExtractor={(board) => board.id.toString()}
    />
  </View>
);

export default TaskList;
