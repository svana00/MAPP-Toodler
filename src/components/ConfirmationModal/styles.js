import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 50,
  },
  buttonText: {
    color: 'white',
    padding: 30,
  },
  confirm: {
    flex: 1,
    marginTop: 30,
    borderColor: 'white',
    backgroundColor: 'red',
  },
  cancel: {
    flex: 1,
    marginTop: 30,
    borderColor: 'white',
    backgroundColor: 'pink',
  },
  smallContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    height: 100,
    width: 300,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
