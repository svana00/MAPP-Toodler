import React from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import plus from '../../resources/plus.png';
import leftArrow from '../../resources/leftArrow.png';
import downArrow from '../../resources/downArrow.png';
import dot from '../../resources/dot.png';
import styles from './styles';
import ListList from './../../components/ListList';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import AnimatedBottomSheet from '../../components/AnimatedBottomSheet';




class Board extends React.Component {
  state = {
    currentId:0,
    currentName: '',
    isAddModalOpen: false,
  }
  async componentDidMount() {
    // load board
    const {navigation} = this.props;
    const currentId = navigation.getParam('boardId', '');
    const currentName = navigation.getParam('boardName', '');
    this.setState({currentId, currentName })
  }
  render() {
    const {
      currentId,
      currentName,
      isAddModalOpen
      } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Toolbar
        onAdd = { () => this.setState({isAddModalOpen: true}) }
        title={currentName}/>
        <ListList
          lists={ data.lists }
          boardId={ currentId }/>
      </View>
    );
  }
}

export default Board;
