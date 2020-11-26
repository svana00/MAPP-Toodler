import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  la: {
    width: 350,
    height: 200,
    borderRadius: 20,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  container: {
    backgroundColor:'pink',
    flexDirection: 'row',
    height: 200,
    width: 350,
    margin: 10,
    borderRadius: 20,
  },
  ThreeDots: {
    alignItems: 'center',
    flex:1,
    width: 50,
    justifyContent: 'center',
  },
  Title: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  Useless: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    alignSelf: 'flex-start',
    fontSize: 23,
    padding:70,
  }
});
