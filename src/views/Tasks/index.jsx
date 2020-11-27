import React from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import TaskList from '../../components/TaskList';
import AddTask from '../../components/AddTask';
import Spinner from '../../components/Spinner';
// import { getAllTasks, addImage, remove } from '../../services/fileService';
import TaskToolbar from '../../components/taskToolbar';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // All tasks within the application directory
      tasks: data.tasks,
      // just while testing
<<<<<<< HEAD
      listId: 0,
      nextId: 17,
=======
      listId: '',
>>>>>>> d2c0ef2ba7e53054f7378a60e99500492da78ad6
      listName: '',
      // selected tasks
      selectedTasks: [],
      loadingTasks: true,
      isAddModalOpen: false,
      currentId: '',
      isBeingModified: false,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    const listName = navigation.getParam('listName', '');
    await this.setState({ listId, listName });
    await this.getItems();
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

  async deleteSelectedTasks() {
    const { selectedTasks, tasks } = this.state;
    this.setState({ loadingTasks: true });
    this.setState({
      selectedTasks: [],
      tasks: tasks.filter((task) => selectedTasks.indexOf(task.id) === -1),
      loadingTasks: false,
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
      this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false, nextId: nextId + 1});
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
      selectedTasks,
      loadingTasks,
      tasks,
      isAddModalOpen,
      listName,
      isBeingModified,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <TaskToolbar
          hasSelectedTasks={selectedTasks.length > 0}
          onAdd={() => this.setState({ isAddModalOpen: true })}
<<<<<<< HEAD
          title={listName}
=======
          onRemove={() => this.deleteSelectedTasks()}
          listName={listName}
>>>>>>> d2c0ef2ba7e53054f7378a60e99500492da78ad6
        />
        {
          loadingTasks
            ? <Spinner />
            : (
              <>
                <TaskList
                  tasks={tasks}
                  selectedTasks={selectedTasks}
                  flipFinished={async (id) => this.flipFinished(id)}
                  onModify={(id) => this.setupModify(id)}
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
      </View>
    );
  }
}

Tasks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Tasks;
