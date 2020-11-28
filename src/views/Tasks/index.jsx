import React from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
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
      tasks: [],
      lists: [],
      // just while testing
      listId: 0,
      nextId: 17,
      listName: '',
      // selected tasks
      loadingTasks: true,
      isAddModalOpen: false,
      currentId: 0,
      isBeingModified: false,
      isListPickerOpen: false,
      currentTask: [],
      name: 'Please enter task',
      description: 'Please enter description',
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    const listName = navigation.getParam('listName', '');
    await this.setState({ listId, listName, loadingTasks: false });
    await this.getItems();
    await this.makePicker();
  }

  async setupModify(id) {
    const { tasks } = this.state;
    let name = '';
    let description = '';
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id === id) {
        name = tasks[i].name;
        description = tasks[i].description;
      }
    }
    await this.setState({
      currentId: id, name, description, isBeingModified: true, isAddModalOpen: true,
    });
  }

  async getItems() {
    this.setState({ loadingTasks: true });
    const { listId, currentTask } = this.state;
    let tasks = data.tasks.filter((task) => task.listId.toString() === listId.toString());
    if (currentTask.length !== 0) {
      tasks = [...tasks, currentTask];
    }
    await this.setState({ loadingTasks: false, tasks });
  }

  async setupMove(id) {
    const { tasks } = this.state;
    let task = [];
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id.toString() === id.toString()) {
        task = tasks[i];
        break;
      }
    }
    await this.setState({ isListPickerOpen: true, currentTask: task });
  }

  deleteTask(id) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id), loadingTasks: false,
    });
  }

  async makePicker() {
    const dataList = data.lists;
    const finalList = [];
    for (let i = 0; i < dataList.length; i += 1) {
      const add = { label: dataList[i].name, value: (`${dataList[i].id}, ${dataList[i].name}`) };
      finalList[i] = add;
    }
    await this.setState({ lists: finalList });
  }

  async toUpdate(list) {
    const navigateTo = list.split(', ');
    const listId = navigateTo[0];
    const listName = navigateTo[1];
    setTimeout(() => {
      Alert.alert(
        'Moving Task',
        `You have been moved with the task to "${listName}"`,
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
        { cancelable: false },
      );
    }, 500);
    await this.setState({ isListPickerOpen: false, listId, listName });
    await this.getItems();
  }

  async makeTask(task) {
    await this.addTask(task);
  }

  async addTask(task) {
    const { tasks, listId, nextId } = this.state;
    if (task.modifyName.length === 0 || task.modifyDescription.length === 0) {
      Alert.alert(
        'Blank fields',
        'You can not have any blank fields, Please fill it all in',
        [{ text: 'Understood' }],
      );
    } else {
      const newTask = {
        id: nextId,
        name: task.modifyName,
        description: task.modifyDescription,
        isFinished: false,
        ListId: listId,
      };
      this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false, nextId: nextId + 1 });
    }
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
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

  async modify(task) {
    const { tasks } = this.state;
    if (task.modifyName.length > 0 || task.modifyDescription.length > 0) {
      console.log('here');
      if (task.modifyName.length === 0) {
        for (let i = 0; i < tasks.length; i += 1) {
          if (tasks[i].id.toString() === task.id.toString()) {
            tasks[i].description = task.modifyDescription;
          }
        }
      } else {
        for (let i = 0; i < tasks.length; i += 1) {
          if (tasks[i].id.toString() === task.id.toString()) {
            tasks[i].name = task.modifyName;
            tasks[i].description = task.modifyDescription;
          }
        }
      }
    }
    this.setState({
      isAddModalOpen: false, isBeingModified: false, currentId: '', name: 'Please enter task', description: 'please enter description',
    });
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
      isListPickerOpen,
      name,
      description,
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
                  onMove={(id) => this.setupMove(id)}
                />
              </>
            )
        }
        <AddTask
          id={currentId.toString()}
          name={name}
          description={description}
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false, name: 'Please enter task', description: 'please enter description' })}
          addTask={(task) => this.makeTask(task)}
          modify={isBeingModified}
          onModify={(id) => this.modify(id)}
        />
        <ListPickerModal
          isOpen={isListPickerOpen}
          closeModal={() => this.setState({ isListPickerOpen: false })}
          onSubmit={(list) => this.toUpdate(list)}
          allLists={lists}
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

export default withNavigation(Tasks);
