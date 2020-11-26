import React from 'react';
import { View, Text } from 'react-native';
import TaskList from '../../components/TaskList';
import AddTask from '../../components/AddTask';
import Spinner from '../../components/Spinner';
//import { getAllTasks, addImage, remove } from '../../services/fileService';
//import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import TaskToolbar from '../../components/taskToolbar';
import * as colors from '../../styles/colors';
import { headings } from '../../styles/headings';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';


class Tasks extends React.Component {
    static navigationOptions = {
      title: 'Tasks'
    }

    state = {
      //All tasks within the application directory
      tasks: [],
      //just while testing
      listId: "",
      listName: "",
      //selected tasks
      selectedTasks: [],
      loadingTasks: true,
      isAddModalOpen: false
    }


    async componentDidMount() {
      const {navigation} = this.props;
      const listId = navigation.getParam('listId', '');
      const listName = navigation.getParam('listName', '');
      await this.setState({listId, listName })
      await this.__getItems();
    }

    async __getItems() {
        console.log(this.state.listId, this.state.listName)
        this.setState({ loadingTasks: true});
        const { listId } = this.state
        const tasks = await data.tasks.filter(tasks => tasks.listId == listId);
        this.setState({loadingTasks: false, tasks})
    }

    onTaskLongPress(id) {
      const { selectedTasks } = this.state;
      if (selectedTasks.indexOf(id) !== -1){
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

    async makeTask(task) {
      await this.addTask(task);
    }
    async addTask(task) {
      this.setState({loadingImages: true})
      const {tasks, listId } = this.state;
      const id = tasks.length + 1;
      const newTask = {id: id.toString(), name: task.name, description: task.description, isFinished: false, ListId: listId};
      this.setState({tasks: [...tasks,newTask], loadingImages: false, isAddModalOpen: false});
    }

      render() {
        const { selectedTasks, loadingTasks, tasks, isAddModalOpen, listName } = this.state;
        return (
          <View style={{ flex:1 }}>
              <TaskToolbar
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
               <AddTask
                  isOpen={isAddModalOpen}
                  closeModal = {() => this.setState({isAddModalOpen: false})}
                  addTask = {task => this.makeTask(task)}/>
          </View>
        );
    }
}

export default Tasks;
