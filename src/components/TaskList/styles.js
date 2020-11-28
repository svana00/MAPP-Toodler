import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boardContainer: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 25,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 5,
  },
});
