import React from 'react';
import { View, Alert } from 'react-native';
import TaskList from '../../components/TaskList';
import AddTask from '../../components/AddTask';
import Spinner from '../../components/Spinner';
// import { getAllTasks, addImage, remove } from '../../services/fileService';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // All tasks within the application directory
      tasks: [],
      // just while testing
      listId: 0,
      listName: '',
      // selected tasks
      selectedTasks: [],
      loadingTasks: true,
      isAddModalOpen: false,
      currentId: 3,
      isBeingModified: false,
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const listId = navigation.getParam('listId', '');
    const listName = navigation.getParam('listName', '');
    await this.setState({ listId, listName })
    await this.getItems();
  }

  onTaskLongPress(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      // The task is already in the list
      this.setState({ selectedTasks: selectedTasks.filter((task) => task !== id) });
    } else {
      // Add a new image
      this.setState({ selectedTasks: [...selectedTasks, id] });
    }
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

  deleteTask(id) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id),
      loadingTasks: false,
    });
  }

  async makeTask(task) {
    await this.addTask(task);
  }

  async addTask(task) {
    const { tasks, listId } = this.state;
    const id = tasks.length + 1;
    if (task.name.length === 0 || task.description.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      const newTask = {
        id: id.toString(),
        name: task.name,
        description: task.description,
        isFinished: false,
        ListId: listId,
      };
      this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false });
    }
  }

  async flipFinished(id) {
    const { tasks } = this.state;
    for (var i in tasks) {
      if (tasks[i].id == id) {
        if (tasks[i].isFinished) {
          tasks[i].isFinished = false;
        }
        else {
          tasks[i].isFinished = true;
        }
      }
    }
    await this.setState(tasks)
  }

  async modify(task) {
    const { tasks } = this.state;
    if (task.name.length === 0 || task.description.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      for (var i in tasks) {
        if (tasks[i].id == task.id) {
          tasks[i].name = task.name;
          tasks[i].description = task.description;
        }
      }
      await this.setState({
        tasks, isAddModalOpen: false, isBeingModified: false, currentId: '',
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
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          listName={listName}
        />
        {
          loadingTasks
            ? <Spinner />
            : (
              <>
                <TaskList
                  tasks={tasks}
                  selectedTasks={selectedTasks}
                  onLongPress={(id) => this.onTaskLongPress(id)}
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
      </View>
    );
  }
}

export default Tasks;
