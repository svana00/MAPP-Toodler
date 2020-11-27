import React from 'react';
import {
  View, Text, TouchableHighlight, Image, ImageBackground, Alert
} from 'react-native';
import plus from '../../resources/plus.png';
import leftArrow from '../../resources/leftArrow.png';
import downArrow from '../../resources/downArrow.png';
import dot from '../../resources/dot.png';
import styles from './styles';
import ListList from './../../components/ListList';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AddListModal from '../../components/AddListModal';
import EditListModal from '../../components/EditListModal';

class Board extends React.Component {
  state = {
    lists: data.lists,
    boardId:0,
    currentName: '',
    selectedList: '',
    isAddModalOpen: false,
    isEditModalOpen: false,
  }

  async componentDidMount() {
    // load board
    const {navigation} = this.props;
    const newBoardId = navigation.getParam('boardId', '');
    const newBoardName = navigation.getParam('boardName', '');
    this.setState({boardId: newBoardId, currentName: newBoardName});
  }

  async addListToState(name, color) {
    let { nextListId, boardId } = this.state;
    nextListId += 1;
    const newList = {
      id: nextListId,
      name,
      color,
      boardId: boardId
    };
    const { lists } = this.state;
    await this.setState({ lists: [...lists, newList], isAddModalOpen: false, nextListId });
  }

   async addList(name, color) {
    if (color == '') {
      color = "#FFFFFF";
    };
    console.log(name, color);
    await this.addListToState(name, color);
    Alert.alert(`${name} has been created!`);
    this.setState({
      isAddModalOpen: false,
    });
  }

  async addListToState(name, color) {
    let nextListId = this.state.lists.length + 1;
    const newList = {
      id: nextListId,
      name,
      color,
      boardId: this.state.boardId
    };
    console.log(newList);
    const { lists } = this.state;
    console.log(this.state.lists);
    this.setState({ lists: [...lists, newList], isAddModalOpen: false, nextListId });
  }

  async deleteList(ListId) {
    const { lists } = this.state;
    this.setState({loadingTasks: true})
    this.setState({
      lists: lists.filter((list) => list.id !== ListId)
    })

  }

  async modifyList(ListId){

  }

  render() {
    const {
      boardId,
      lists,
      currentName,
      isAddModalOpen,
      isEditModalOpen,
      } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          title={currentName}
          />
        <ListList
          lists={ lists }
          boardId={ boardId }
          onDelete={(id) => this.deleteList(id)}
          isModifying= {() => this.setState({ isEditModalOpen: true })}
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
        />
      </View>
    );
  }
}

export default Board;
