import React from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import TaskList from '../../components/TaskList';
import ListPickerModal from '../../components/ListPickerModal';
import AddTask from '../../components/AddTask';
import Spinner from '../../components/Spinner';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // All tasks within the application directory
      tasks: data.tasks,
      lists: [],
      // just while testing
      listId: 0,
      nextId: 17,
      listName: '',
      // selected tasks
      loadingTasks: true,
      isAddModalOpen: false,
      currentId: 3,
      isBeingModified: false,
      isListPickerOpen: true,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    const listName = navigation.getParam('listName', '');
    await this.setState({ listId, listName });
    await this.getItems();
    await this.makePicker();
  }

  async setupModify(id) {
    await this.setState({ currentId: id, isBeingModified: true, isAddModalOpen: true });
  }

  async getItems() {
    this.setState({ loadingTasks: true });
    const { listId } = this.state;
    const tasks = data.tasks.filter((task) => task.listId === listId);
    await this.setState({ loadingTasks: false, tasks });
  }

  async makePicker() {
    const dataList = data.lists
    const finalList = []
    for (var i in dataList){
      var add = {label:  dataList[i].name, value: (dataList[i].id + ", " + dataList[i].name)}
      finalList[i] = add;
    }
    await this.setState({lists: finalList});
  }

  deleteTask(id) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id), loadingTasks: false,
    });
  }

  async makeTask(task) {
    await this.addTask(task);
  }

  async addTask(task) {
    const { tasks, listId, nextId } = this.state;
    const id = tasks.length + 1;
    if (task.name.length === 0 || task.description.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      const newTask = {
        id: nextId,
        name: task.name,
        description: task.description,
        isFinished: false,
        ListId: listId,
      };
      this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false, nextId: nextId + 1 });
    }
  }

  async flipFinished(id) {
    const { tasks } = this.state;
    const newTasks = tasks.map((singleTask) => {
      if (singleTask.id === id) {
        if (singleTask.isFinished) {
          singleTask.isFinished = false;
        } else {
          singleTask.isFinished = true;
        }
      }
      return singleTask;
    });

    await this.setState({ tasks: newTasks });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  async modify(task) {
    const { tasks } = this.state;
    if (task.name.length === 0 || task.description.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      const newTasks = tasks.map((singleTask) => {
        if (singleTask.id === task.id) {
          singleTask.name = task.name;
          singleTask.description = task.description;
        }
        return singleTask;
      });
      this.setState({
        tasks: newTasks, isAddModalOpen: false, isBeingModified: false, currentId: '',
      });
    }
  }

  render() {
    const {
      currentId,
      loadingTasks,
      tasks,
      isAddModalOpen,
      listName,
      isBeingModified,
      lists,
      isListPickerOpen
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          title={listName}
          onAdd={() => this.setState({ isAddModalOpen: true })}
        />
        {
          loadingTasks
            ? <Spinner />
            : (
              <>
                <TaskList
                  tasks={tasks}
                  flipFinished={async (id) => this.flipFinished(id)}
                  onModify={(id) => this.setupModify(id)}
                  onRemove={(id) => this.deleteTask(id)}
                />
              </>
            )
        }
        <AddTask
          id={currentId}
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          addTask={(task) => this.makeTask(task)}
          modify={isBeingModified}
          onModify={(id) => this.modify(id)}
        />
        <ListPickerModal
          isOpen = {isListPickerOpen}
          closeModal = {() => this.setState({isListPickerOpen: false})}
          onSubmit = {() => console.log("HERE DOGGO")}
          allLists = {lists}
        />
      </View>
    );
  }
}

Tasks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Tasks;
