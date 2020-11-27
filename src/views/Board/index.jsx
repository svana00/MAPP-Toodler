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

class Board extends React.Component {
  state = {
    lists: data.lists,
    BoardId:0,
    currentName: '',
    selectedList: '',
    isAddModalOpen: false,
    isEditModalOpen: false,
  }

  async componentDidMount() {
    // load board
    const {navigation} = this.props;
    const BoardId = navigation.getParam('boardId', '');
    const currentName = navigation.getParam('boardName', '');
    this.setState({BoardId, currentName});
  }

  async addListToState(name, color) {
    let { nextListId, boardId } = this.state;
    nextListId += 1;
    const newList = {
      id: nextListId,
      name,
      color,
      BoardId: boardId
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
      BoardId: this.state.BoardId
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
      lists: lists.filter((list) => list.id !== id)
    })

  }

  render() {
    const {
      BoardId,
      lists,
      currentName,
      isAddModalOpen
      } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          title={currentName}/>
        <ListList
          lists={ lists }
          boardId={ BoardId }/>
        <AddListModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          onSubmit={(name, color) => this.addList(name, color)}
        />

      </View>
    );
  }
}

export default Board;
