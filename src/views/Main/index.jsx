import React from 'react';
import {
  View, Text, TouchableHighlight, Image
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation:{navigate}}) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.header}>toodler</Text>
    <Text style={styles.paragraph}>SO SIMPLE, A CHILD COULD USE IT</Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>GET STARTED</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
