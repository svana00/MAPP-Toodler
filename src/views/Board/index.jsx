import React from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import plus from '../../resources/plus.png';
import leftArrow from '../../resources/leftArrow.png';
import downArrow from '../../resources/downArrow.png';
import dot from '../../resources/dot.png';
import styles from './styles';

class Board extends React.Component {
  state = {
    currentId: 1,
    currentName: '',
  }
  async componentDidMount() {
    // load board
    const {navigation} = this.props;
    const currentId = navigation.getParam('boardId', '');
    const currentName = navigation.getParam('boardName', '');
    this.setState({currentId, currentName })
  }
  render() {
    const {currentBoard} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          <Image source={plus} style={styles.plus} />
          <Image source={downArrow} style={styles.downArrow} />
          <Image source={leftArrow} style={styles.leftArrow} />
          <Image source={dot} style={styles.dot} />
          <Image source={dot} style={styles.dot} />
          <Image source={dot} style={styles.dot} />
          <Text style={styles.header}>Hello</Text>
        </View>
        <View style={styles.whiteContainer}>
          <Text style={styles.paragraph}> Task 1</Text>
        </View>
      </View>
    )
  }
}

export default Board;
