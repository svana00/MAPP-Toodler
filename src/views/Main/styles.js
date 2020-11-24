import { StyleSheet } from 'react-native';
import { backgroundPink, white } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    fontFamily: 'Alice-Regular',
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
  },
  paragraph: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
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
  },
  logo: {
    width: 235,
    height: 250,
  }
});
