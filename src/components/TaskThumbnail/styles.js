import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    backgroundColor: 'white',
    margin: 10,

  },
  toolbarActionText: {
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    color: 'black',
    fontSize: 16,
  },
  checkmark: {
        position: 'absolute',
        color: 'black',
        top: 15,
        right: 15,
        fontSize: 16,
        opacity: 1,
    }
});
