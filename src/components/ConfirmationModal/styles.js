import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  confirm: {
    flex: 1,
    marginTop: 30,
    borderColor: 'white',
    backgroundColor: 'red',
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
  delete: {
    color: 'red',
    fontSize: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boardContainer: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonItem: {
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  cancel: {
    color: 'green',
    fontSize: 20,
    padding: 20,
    backgroundColor: 'white',
  },
});
