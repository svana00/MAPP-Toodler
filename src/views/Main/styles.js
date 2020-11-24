import { StyleSheet } from 'react-native';
import { backgroundPink, white } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECA18B',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    textAlign: 'center',
    justifyContent: 'space-around',
    fontSize: 40,
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
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
    borderColor: 'white',
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
