import React from 'react';
import { View, Text } from 'react-native';
import TaskList from '../../components/TaskList';
//import AddModal from '../../components/AddModal';
import Spinner from '../../components/Spinner';
//import { getAllTasks, addImage, remove } from '../../services/fileService';
//import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import taskToolbar from '../../components/taskToolbar';
import * as colors from '../../styles/colors';
import { headings } from '../../styles/headings';
import data from '../../resources/data.json';


class Tasks extends React.Component {
    static navigationOptions = {
      title: 'Tasks'
    }

    state = {
      //All tasks within the application directory
      tasks: [],
      //just while testing
      listId: 1,
      listName: "Test to begin with",
      //selected tasks
      selectedTasks: [],
      loadingTasks: true,
      isAddModalOpen: false
    }


    async componentDidMount() {
      await this.__getItems();
    }

    async __getItems() {
        this.setState({ loadingTasks: true});
        const tasks = data.tasks.filter(tasks => tasks.listId == this.listId );
        this.setState({loadingTasks: false, tasks})
    }

    onTaskLongPress(id) {
      const { selectedTasks } = this.state;
      if (selectedTasks.indefOf(id) !== -1){
        //The task is already in the list
        this.setState({selectedTasks: selectedTasks.filter(task => task!=id)});
      } else {
        // Add a new image
        this.setState({selectedTasks: [...selectedTasks, id]});
      }
  }

  async deleteSelectedTasks() {
    const {selectedTasks, tasks} = this.state;
    this.setState({loadingImages: true})
  }

      render() {
        const { selectedTasks, loadingTasks, tasks, isCreateBoardModalOpen, listName } = this.state;
        return (
          <View style={{ flex:1 }}>
              //hasSelectedTasks, onAdd, onRemove, listName
              <taskToolbar
                  hasSelectedTasks={ selectedTasks.length > 0 }
                  onAdd={ () => this.setState({ isAddModalOpen: true }) }
                  onRemove={ () => this.deleteSelectedTasks() }
                  listName = { listName }/>
              {
                  loadingTasks
                  ?
                  <Spinner />
                  :
                  <>
                      <TaskList
                          tasks = { tasks }
                          selectedTasks = { selectedTasks }
                          onLongPress = {id => this.onTaskLongPress(id)} />
                  </>
               }

            </View>
        );
    }
}

export default Tasks;
