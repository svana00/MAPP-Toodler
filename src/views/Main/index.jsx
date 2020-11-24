import React from 'react';
import {
  View, Text, TouchableHighlight, Image
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation:{navigate}}) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.header}>Toodler</Text>
    <Text style={styles.paragraph}>So simple a toddler could use it</Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
