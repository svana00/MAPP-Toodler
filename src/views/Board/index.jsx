import React from 'react';
import {
  View, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import ListList from '../../components/ListList';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AddListModal from '../../components/AddListModal';
import EditListModal from '../../components/EditListModal';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists,
      boardId: 0,
      currentName: '',
      selectedList: {},
      isAddModalOpen: false,
      isEditModalOpen: false,
    };
  }

  async componentDidMount() {
    // load board
    const { navigation } = this.props;
    const newBoardId = navigation.getParam('boardId', '');
    const newBoardName = navigation.getParam('boardName', '');
    this.setState({ boardId: newBoardId, currentName: newBoardName });
  }

  async addListToState(name, color) {
    let { nextListId } = this.state;
    const { boardId } = this.state;
    nextListId += 1;
    const newList = {
      id: nextListId,
      name,
      color,
      boardId,
    };
    const { lists } = this.state;
    await this.setState({ lists: [...lists, newList], isAddModalOpen: false, nextListId });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  async addList(name, color) {
    if (color === '') {
      color = '#FFFFFF';
    }
    await this.addListToState(name, color);
    Alert.alert(`${name} has been created!`);
    this.setState({
      isAddModalOpen: false,
    });
  }

  async deleteList(listId) {
    const { lists } = this.state;
    this.setState({
      lists: lists.filter((list) => list.id !== listId),
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  modifyList(id, name, color) {
    const { lists } = this.state;
    const list = { id, name, color };

    const newLists = lists.map((aList) => {
      if (aList.id === list.id) {
        aList.name = list.name;
        aList.color = list.color;
      }
      return aList;
    });
    this.setState({
      lists: newLists, isEditModalOpen: false,
    });
  }

  async prepModifying(id, name, color) {
    await this.setState({ selectedList: { id, name, color } });
    await this.setState({ isEditModalOpen: true });
  }

  render() {
    const {
      boardId,
      lists,
      currentName,
      isAddModalOpen,
      isEditModalOpen,
      selectedList,
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          title={currentName}
        />
        <ListList
          lists={lists}
          boardId={boardId}
          onDelete={(id) => this.deleteList(id)}
          prepModifying={(id, name, color) => this.prepModifying(id, name, color)}
        />
        <AddListModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          onSubmit={(name, color) => this.addList(name, color)}
        />
        <EditListModal
          isOpen={isEditModalOpen}
          closeModal={() => this.setState({ isEditModalOpen: false })}
          onModify={(id, name, color) => this.modifyList(id, name, color)}
          selectedList={selectedList}
        />
      </View>
    );
  }
}

Board.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;
