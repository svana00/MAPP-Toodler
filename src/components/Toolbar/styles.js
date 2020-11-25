import { StyleSheet } from 'react-native';
import { backgroundPink } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: backgroundPink,
    border: 'black',
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  clear: {
    color: 'transparent',
  },
});
