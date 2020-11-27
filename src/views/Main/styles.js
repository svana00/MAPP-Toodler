import { StyleSheet } from 'react-native';
import { white } from '../../styles/colors';

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
    fontFamily: 'Alice'
  },
  paragraph: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingRight: 40,
    paddingLeft: 40,
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: white,
  },
  buttonText: {
    color: 'black',
    fontFamily:'IBMBold'
  },
  logo: {
    width: 235,
    height: 250,
  }
});
