import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: width - 20,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: 'center'
  }

});
