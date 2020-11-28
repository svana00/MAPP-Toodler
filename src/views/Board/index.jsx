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
import ConfirmationModal from '../../components/ConfirmationModal';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists,
      boardId: 0,
      currentName: '',
      selectedList: { id: 0, color: '', name: '' },
      isAddModalOpen: false,
      isEditModalOpen: false,
      isConfirmationOpen: false,
      selectedId: 0,
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
    const { boardId, lists } = this.state;
    const nextListId = lists.length + 1;
    const newList = {
      id: nextListId,
      name,
      color,
      boardId,
    };
    await this.setState({ lists: [...lists, newList], isAddModalOpen: false });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  async addList(name, color) {
    if (name === '') {
      Alert.alert(
        'Blank Name',
        "You can not have an empty value for a List's name. Please fill it in",
      );
    } else {
      if (color === '') {
        await this.addListToState(name, '#FFFFFF');
        return;
      }
      await this.addListToState(name, color);
      this.setState({
        isAddModalOpen: false,
      });
      setTimeout(() => {
        Alert.alert(
          'Successful!',
          `${name} has been created!`,
          [
            {
              text: 'OK',
              onPress: () => {},
            },
          ],
          { cancelable: false },
        );
      }, 500);
    }
  }

  async deleteList(listId) {
    const { lists } = this.state;
    await this.setState({
      lists: lists.filter((list) => list.id !== listId),
    });
    await this.setState({
      isConfirmationOpen: false,
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

  async prepDelete(id) {
    await this.setState({ selectedId: id });
    await this.setState({ isConfirmationOpen: true });
  }

  render() {
    const {
      boardId,
      lists,
      currentName,
      isAddModalOpen,
      isEditModalOpen,
      isConfirmationOpen,
      selectedList,
      selectedId,
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
          onDelete={(id) => { this.prepDelete(id); }}
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
          id={selectedList.id}
          oldColor={selectedList.color}
          oldName={selectedList.name}
        />
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          closeModal={() => this.setState({ isConfirmationOpen: false })}
          onConfirm={() => this.deleteList(selectedId)}
          objectName="List"
        />
      </View>
    );
  }
}

Board.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;
