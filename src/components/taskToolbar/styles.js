import { StyleSheet } from 'react-native';
import { backgroundPink } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    backgroundColor: backgroundPink,
    borderWidth: 1,
    borderColor: 'black'
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  toolbarHeading: {
    flex: 1,
    paddingLeft: 6,
    fontWeight: '900',
    color: 'white',
    fontSize: 20
  }
});
