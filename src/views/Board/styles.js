import { StyleSheet } from 'react-native';
import { backgroundPink, white } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECA18B',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  smallContainer: {
    marginTop: 10,
    flex: 1,
    padding: 20,
    backgroundColor: '#ECA18B',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
    paddingTop: 8,
    fontFamily:'Alice'
  },
  downArrow: {
    width: 20,
    height: 20,
  },
  leftArrow: {
    width: 20,
    height:20
  },
  plus: {
    width:20,
    height:20
  },
  dot: {
    width:15,
    height:15
  }

});
