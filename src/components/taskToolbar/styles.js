import { StyleSheet } from 'react-native';
import { backgroundPink } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 80,
      backgroundColor: backgroundPink
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center'
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
})
