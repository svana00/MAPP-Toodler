import React from 'react';
import { View, Text } from 'react-native';
//import GalleryList from '../../components/GalleryList';
//import AddModal from '../../components/AddModal';
//import Spinner from '../../components/Spinner';
//import { getAllTasks, addImage, remove } from '../../services/fileService';
//import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import * as colors from '../../styles/colors';
import { headings } from '../../styles';


class Tasks extends React.component {
    static navigationOptions = {
      title: 'Tasks'
    }

    state = {
      //All tasks within the application directory
      tasks: [],
      //selected tasks
      selectedTasks: [],
      loadingTasks: true,
      isAddModalOpen: false
    }


    async componentDidMount() {
      await this.__fecthItems();
    }

    async __fecthItems() {
        this.setState({ loadingTasks: true});
        const tasks = await getAllTasks();
        this.setState({loadingTasks: false, tasks})
    }

    onTaksLongPress(name) {
      const { selectedTasks } = this.state;
      if (selectedTasks.indefOf(name) !== -1){
        //The task is already in the list
        this.setState({selectedTasks: selectedTasks.filter(task => task!=name)});
      } else {
        // Add a new image
        this.setState({selectedTasks: [...selectedTasks, name]})
      }

    }
}

export default Tasks;
