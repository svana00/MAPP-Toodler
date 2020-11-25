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
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default TaskList;


const GalleryList = ({ images, selectedImages, onLongPress }) => (
    <View style={ styles.listContainer }>
        <FlatList
            numColumns={ 3 }
            data={ images }
            extraData={ selectedImages }
            renderItem={ ({ item: { file, name } }) => {
                return (
                    <ImageThumbnail
                        isSelected={ selectedImages.indexOf(name) !== -1 }
                        onLongPress={ onLongPress }
                        name={ name }
                        file={ file } />
                );
            } }
            keyExtractor={ image => image.name } />
    </View>
);

export default GalleryList;
