import React from 'react';
import moment from 'moment';

import { AppLoading } from 'expo';

import {
  useFonts, Alice400Regular,
} from '@expo-google-fonts/alice';

import {
  IBMPlexSans300Light,
  IBMPlexSans400Regular,
  IBMPlexSans500Medium,
  IBMPlexSans700Bold,
} from '@expo-google-fonts/ibm-plex-sans';
import AppContainer from './src/routes';

moment.locale('en');

export default function App() {
  const [fontsLoaded] = useFonts({
    Alice: Alice400Regular,
    IBMLight: IBMPlexSans300Light,
    IBMRegular: IBMPlexSans400Regular,
    IBMMedium: IBMPlexSans500Medium,
    IBMBold: IBMPlexSans700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppContainer />
  );
}
