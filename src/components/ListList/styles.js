import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  boardContainer: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonItem: {
    padding: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 3,
  },
});
