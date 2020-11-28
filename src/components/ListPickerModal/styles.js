import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TouchableOpacity: {
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 4,
    paddingRight: 4,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  modalTitleText: {
    padding: 0,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    marginTop: 50,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
