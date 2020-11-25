import React from 'react';
import moment from 'moment';

import { AppLoading } from 'expo';

import {
  useFonts, Alice_400Regular,
} from '@expo-google-fonts/alice';

import {
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_700Bold,
} from '@expo-google-fonts/ibm-plex-sans';
import AppContainer from './src/routes';

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
    <AppContainer />
  );
}
