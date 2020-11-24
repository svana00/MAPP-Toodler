import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: {navigate}}) => (
  <View style = {styles.container}>
    <Image source = {logo} style={ styles.logo} />
  </View>
);

export default Main;
