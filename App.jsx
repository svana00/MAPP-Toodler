import React from 'react';
import moment from 'moment';

import { AppLoading } from 'expo';

import {
  useFonts, Alice_400Regular
} from '@expo-google-fonts/alice'


import {
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_700Bold,
} from '@expo-google-fonts/ibm-plex-sans';
import Boards from './src/views/Boards';

moment.locale('en');

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Alice: Alice_400Regular,
    IBMLight: IBMPlexSans_300Light,
    IBMRegular: IBMPlexSans_400Regular,
    IBMMedium: IBMPlexSans_500Medium,
    IBMBold: IBMPlexSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Boards />
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
